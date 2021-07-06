import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "reactstrap";
import ExportIcon from "../../property/images/export_icon.svg";
import SearchIcon from "../../property/images/search_icon.svg";
import BackgroundGrayLabel from "../../constituents/ILabel/BackgroundGrayLabel/index";
import GeneralTextbox from "../../constituents/ITextboxes/GeneralTextbox02";
import GeneralButton from "../../constituents/IButton/GeneralButton/index";
import { getKeywords, getAllKeywords } from "../../request/api";
import eventShuttle from "../../eventShuttle";
import RegisterKeyword from "./RegisterKeyword";
import { useJsonToCsv } from "react-json-csv";
import classes from "./styles.module.css";

const fields = {
  keyword: "\ufeff KeyWords",
  synonyms: "\ufeff synonyms",
};

const RegisterSynonyms = () => {
  const { t } = useTranslation();
  const [searchKeyword, setsearchKeyword] = useState("");
  const [regKeywords, setRegKeywords] = useState([]);
  const [isEditOrSearch, setIsEditOrSearch] = useState(false);
  const { saveAsCsv } = useJsonToCsv();

  const onSearchKeyword = async (e) => {
    setsearchKeyword(e.target.value);
    if (e.charCode === 13 || e.target.value) {
      try {
        await getKeywords(e.target.value).then((res) => {
          setRegKeywords(res.data);
        });
      } catch (error) {
        eventShuttle.dispatch("something_went_wrong");
      }
    }
  };

  const exportKeywordsAndSynonyms = async () => {
    try {
      const res = await getAllKeywords();
      saveAsCsv({
        data: res.data,
        fields,
        filename: "Keywords and Synonyms",
      });
    } catch {
      eventShuttle.dispatch("something_went_wrong");
    }
  };

  const addNewKeyword = () => {
    // setRegKeywords([{ keyword: "", synonyms: [] }, ...regKeywords]);
    setsearchKeyword("");
    setRegKeywords([{ keyword: "", synonyms: [] }]);
  };

  useEffect(() => {
    setIsEditOrSearch(regKeywords.length > 0 ? true : false);
  }, [regKeywords]);

  return (
    <>
      <h3 className="mb-4" id="register_synonyms">
        {t("registerSynonyms.register_synonyms")}
      </h3>
      <Row className="mb-4 smallest-padding-box">
        <Col lg="4" md="5" sm="5" xs="5">
          <div className={classes.search_box}>
            <img
              src={SearchIcon}
              alt="Search Icon"
              id="register_synonyms_add_keywords"
            />
            <GeneralTextbox
              text={searchKeyword}
              onKeyPress={onSearchKeyword}
              placeholder={t(
                "registerSynonyms.register_synonyms_search_keywords"
              )}
              onChange={onSearchKeyword}
              id="register_synonyms_search_keywords"
            />
          </div>
        </Col>
        <Col lg="8" md="7" sm="7" xs="7">
          <GeneralButton
            title={t("registerSynonyms.register_synonyms_add_keywords")}
            className={`mr-4 w-auto px-4 mb-2 ${classes.add_btn} ${classes.height_64}`}
            id="register_synonyms_add_keywords"
            onClick={addNewKeyword}
          />
          <button
            className={`mb-2 ${classes.export_btn} ${classes.height_64}`}
            id="register_synonyms_export"
            onClick={exportKeywordsAndSynonyms}
          >
            <img src={ExportIcon} alt="Export Icon" className={`mr-2`} />
            {t("registerSynonyms.register_synonyms_export")}
          </button>
        </Col>
      </Row>
      {isEditOrSearch && (
        <Row>
          <Col xl="3" lg="4" md="5" sm="5" xs="5">
            <BackgroundGrayLabel
              label={t("registerSynonyms.register_synonyms_keywords_label")}
              className="mb-2 py-3"
              id="register_synonyms_keywords_label"
            />
          </Col>
          <Col xl="9" lg="8" md="7" sm="7" xs="7">
            <BackgroundGrayLabel
              label={t("registerSynonyms.register_synonyms_label")}
              className="mb-2 py-3"
              id="register_synonyms_label"
            />
          </Col>
        </Row>
      )}
      {regKeywords.map((regKeyword, index) => (
        <RegisterKeyword
          regKeywords={regKeywords}
          regKeyword={regKeyword}
          key={index}
          setRegKeywords={setRegKeywords}
        />
      ))}
    </>
  );
};

export default RegisterSynonyms;
