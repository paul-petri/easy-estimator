import React, { Suspense } from 'react';
import EasyEstimatorPage from './pages/easy-estimator/easy-estimator-page';
import './app.scss';
import 'antd/dist/antd.less';
import { I18nextProvider } from 'react-i18next';
import i18n from './core/i18n/i18n';

const App: React.FC<{}> = () => {
  console.log('init');
  //   console.log(process.env.PUBLIC_URL);

  return (
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
        <div className="app">
          <EasyEstimatorPage />
        </div>
      </I18nextProvider>
    </Suspense>
  );
};

export default App;
