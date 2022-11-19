import React from 'react';
import DocumentationHero from '../../../features/documentation/components/DocumentationHero';
import DocumentNav from '../../../features/documentation/components/DocumentNav';

import './UtilitiesPage.scss';
import DocumentationSidebar from '../../../features/documentation/components/DocumentationSidebar';

const UtilitiesPage = () => {
  return (
    <div className="utilities_wrapper">
      <DocumentNav />
      <DocumentationHero
        headerText="Utilities"
        paragraphText="An overview of Tozilla's Utility"
      />
<<<<<<< HEAD
      <section
        className="utilities_introductionContent"
        id="utilities"
      >
=======
      <section className="utilities_introductionContent" id="utilities">
>>>>>>> 18146e61e73437b503f49e22b79702ce5bac71ca
        <div className="utilities_mainContent">
          <h1 className="utilities_title">Utilities</h1>
          <div className="utilities_underline" />
          <p className="utilities_paragraph">
<<<<<<< HEAD
          Get started with Tozilla’s Utility
          </p>
          <div className="utilities_overview" id="overview">
            <h1>Utilities</h1>
            <p className='mb-3'>
            The Tozilla API is organized around REST. Our API has predictable resource-oriented URLs,accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
            </p>
            <p className='mb-3'>
            The Tozilla API doesnt support bulk updates. You can work on only one object per request.The Tozilla API differs for every account as we release new versions and tailor functionality. Log in to see docs customized to your version of the API, with your test key and data.
            </p>
            <p className='mb-3'>
            You can use the Stripe API in test mode, which doesnt affect your live data or interact with the banking networks. The API key you use to check the request determines whether the request is live mode or test mode.
           </p>
=======
            Get started with Tozilla’s Utility
          </p>
          <div className="utilities_overview" id="overview">
            <h1>Utilities</h1>
            <p className="mb-3">
              The Tozilla API is organized around REST. Our API has predictable
              resource-oriented URLs,accepts form-encoded request bodies,
              returns JSON-encoded responses, and uses standard HTTP response
              codes, authentication, and verbs.
            </p>
            <p className="mb-3">
              The Tozilla API doesnt support bulk updates. You can work on only
              one object per request.The Tozilla API differs for every account
              as we release new versions and tailor functionality. Log in to see
              docs customized to your version of the API, with your test key and
              data.
            </p>
            <p className="mb-3">
              You can use the Stripe API in test mode, which doesnt affect your
              live data or interact with the banking networks. The API key you
              use to check the request determines whether the request is live
              mode or test mode.
            </p>
>>>>>>> 18146e61e73437b503f49e22b79702ce5bac71ca
          </div>
        </div>

        <DocumentationSidebar
<<<<<<< HEAD
          sectionIds={[
            'utilities'
          ]}
          linkTexts={[
            'Utilities'
          ]}
=======
          sectionIds={['utilities']}
          linkTexts={['Utilities']}
>>>>>>> 18146e61e73437b503f49e22b79702ce5bac71ca
        />
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default UtilitiesPage;
=======
export default UtilitiesPage;
>>>>>>> 18146e61e73437b503f49e22b79702ce5bac71ca
