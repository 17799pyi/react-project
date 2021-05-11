
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Hello new project</h1>
      <p>{t('TextLabel')}</p>
      <Button color="secondary" size="lg" disabled>Button</Button>
    </div>
  );
}

export default App;
