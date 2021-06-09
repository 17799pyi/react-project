import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css'

const Tab = ({ className, visibleTab, setVisibleTab }) => {
    const { t } = useTranslation();
    const category = [
        {
            id: 1,
            name: "配偶者ストーリー",
        },
        {
            id: 2,
            name: "お子様ストーリー",
        },
        {
            id: 3,
            name: "おひとり様ストーリー",
        }
    ]

    useEffect(() => {
        setVisibleTab(category[0].id)
    }, [])

    return (
        <div className={`${styles.tabs} ${className} `}>
            <ul className={`${styles.tabs_titles}`}>
                {category.map((item) => (
                    <li key={item.id} onClick={() => setVisibleTab(item.id)} className={` ${styles.tab_title} ${visibleTab === item.id && styles.tab_title__active} }`}>
                        {item.name}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
export default Tab;
