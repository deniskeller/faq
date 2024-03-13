import React, { useState } from 'react';
import s from './PrivacyPolicy.module.scss';
import { BaseContainer } from '@base/index';
import { useRouter } from 'next/navigation';
import { ToMainPage } from '@content/landing/index';
import Link from 'next/link';

// var Scroll = require('react-scroll');
// var scroller = Scroll.scroller;

const PrivacyPolicy: React.FC = () => {
  const router = useRouter();

  const navbar_links = [
    'What types of personal data we collect',
    'Why we use, collect, and disclose personal information',
    'How long We Keep Your Personal Data',
    'Do we use your personal information for direct marketing',
    'To whom do we disclose your personal information',
    'Using our website and cookies',
    'New purposes',
    'Testimonials',
    'Security',
    'Links',
    'Accessing or correcting your personal information',
    'Making a complaint',
    'Changes to this Privacy Policy',
    'Contact Us',
  ];
  const [isActive, setIsActive] = useState(0);

  const handleClickNavbar = (index: number) => {
    setIsActive(index);

    // scroller.scrollTo(`section-${index + 1}`, {
    //   duration: 0,
    //   delay: 0,
    //   smooth: true,
    //   offset: -100,
    // });
  };

  return (
    <section className={s.PrivacyPolicy}>
      <BaseContainer large>
        <ToMainPage className={s.PrivacyPolicy_ToMainPage} />

        <div className={s.PrivacyPolicy_Container}>
          <div className={s.PrivacyPolicy_Content}>
            <div className={s.Header}>
              <h1>Privacy Policy</h1>
            </div>

            <ul className={s.SectionList}>
              <li className={s.Section}>
                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Your access and use of the Services constitutes your
                      agreement to be bound by these Policy. You understand and
                      agree that the Service is provided on an AS IS and AS
                      AVAILABLE basis as amended from time to time.
                    </p>

                    <p className={s.Paragraph_Description}>
                      In this Privacy Policy <strong>FN MEDIA LTD</strong> may
                      be referred to as us/our/we. The collection, use, storage
                      and disclosure of your personal information is governed by
                      this Privacy Policy. By using our site, you agree that we
                      may use/disclose/collect personal information in
                      accordance with the current Privacy Policy. FN MEDIA LTD
                      reserves the right to change our Privacy Policy. All
                      changes will be posted on our website. We recommend that
                      you check our website from time to time for such changes.
                    </p>

                    <p className={s.Paragraph_Description}>
                      Personal information is also considered to be a viewpoint
                      and information used to identify a person.
                    </p>
                  </li>
                </ul>
              </li>
              {/* 1 */}
              <li className={s.Section} id="section-1">
                <div className={s.Section_Title}>
                  <h2>1. What types of personal data we collect</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Here you can see a list of personal data that our company
                      collects
                    </p>
                  </li>

                  <li className={s.Paragraph}>
                    <ul className={s.Paragraph_List}>
                      <li>name;</li>
                      <li>email address;</li>
                      <li>age or date of birth;</li>
                      <li>geolocation;</li>
                      <li>the page traffic;</li>
                      <li>the ID and type of your device;</li>
                      <li>credit card information;</li>
                      <li>IP address;</li>
                      <li>standard data of your web log;</li>
                      <li>
                        information about your PC and the network connection;
                      </li>
                      <li>phone number;</li>
                      <li>
                        Additional information that you provide through our site
                        or indirectly through applications or online services or
                        other sites from which you authorize us to collect
                        information.
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Such personal information may be collected from you or
                      from third parties. We gather this data in case:
                    </p>
                  </li>

                  <li className={s.Paragraph}>
                    <ul className={s.Paragraph_List}>
                      <li>
                        Interactions with our website, advertising, services;
                      </li>
                      <li>
                        when communicating via email in case you share
                        information from other social apps/sites
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* 2 */}
              <li className={s.Section} id="section-2">
                <div className={s.Section_Title}>
                  <h2>
                    2. Why we use, collect, and disclose personal information
                  </h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Our company may use/store/disclose personal information
                      for the purposes described next:
                    </p>
                  </li>

                  <li className={s.Paragraph}>
                    <ul className={s.Paragraph_List}>
                      <li>
                        to enable you to access and use our website and
                        services;
                      </li>
                      <li>to maintain, enhance, secure our website;</li>
                      <li>
                        to send service, administrative
                        messages/reminders/technical notifications or security
                        alert messages about the information you requested;
                      </li>
                      <li>
                        to comply with legal obligations (resolutions of any
                        complexity that may arise with any of our users) and to
                        enforce consents;
                      </li>
                      <li>
                        to send advertising and marketing offers that may
                        potentially be of interest to you (including information
                        that may be sent by our business partners).
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Also, our company reserves the right to transfer your data
                      to a third party. Such data transmitted to a third party
                      may be aggregated to create anonymous consumer
                      information. In turn, the consumer information may be used
                      to track user interests, preferences and to personalize
                      your experience of the services you receive.
                    </p>
                  </li>
                </ul>
              </li>

              {/* 3 */}
              <li className={s.Section} id="section-3">
                <div className={s.Section_Title}>
                  <h2>3. How long We Keep Your Personal Data</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      The company will retain the data for the period necessary
                      to fulfill the purposes specified in this Privacy Policy.
                      We may also retain data for longer if permitted by local
                      laws to which the Company is subject.
                    </p>
                  </li>
                </ul>
              </li>

              {/* 4 */}
              <li className={s.Section} id="section-4">
                <div className={s.Section_Title}>
                  <h2>
                    4. Do we use your personal information for direct marketing
                  </h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      The user can receive information/advertisements from us or
                      our business partners. You can get this kind of
                      information by email, sms, Telegram, Facebook messaging,
                      or other ways of contacting you.
                    </p>
                  </li>
                </ul>
              </li>

              {/* 5 */}
              <li className={s.Section} id="section-5">
                <div className={s.Section_Title}>
                  <h2>5. To whom do we disclose your personal information</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      We may disclose personal information to persons identified
                      in this Policy:
                    </p>
                  </li>

                  <li className={s.Paragraph}>
                    <ul className={s.Paragraph_List}>
                      <li>our employees or their related corporate bodies;</li>
                      <li>
                        to service providers (including the providers that
                        operate our websites or our business and connect with
                        our services to you), third-party providers, editors;
                      </li>
                      <li>professional advisors and agents;</li>
                      <li>payment systems operators;</li>
                      <li>our current/potential business partner.</li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* 6 */}
              <li className={s.Section} id="section-6">
                <div className={s.Section_Title}>
                  <h2>6. Using our website and cookies</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      When you use/visit our Website, we may collect personal
                      information. Our Web site does not identify each user
                      personally by browsing information, but we may in some
                      cases collect certain information about your use of our
                      site: which pages you view, the time and date you visit,
                      your IP address. Cookies or other tracking tools are also
                      used to improve our service. Cookies are a necessary file
                      stored on your phone or PC to enable the company to
                      identify you on different websites/services. Please
                      consider that the service may not work properly if you
                      disable cookies in your browser. Cookies are used to help
                      collect personal data. Our company views cookies as any
                      other personal information.
                    </p>
                  </li>
                </ul>
              </li>
              {/* 7 */}
              <li className={s.Section} id="section-7">
                <div className={s.Section_Title}>
                  <h2>7. New purposes</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      If our company wants to use your personal data for new
                      purposes that are not described at the moment, we will
                      provide you with a new notification describing the update.
                    </p>
                  </li>
                </ul>
              </li>
              {/* 8 */}
              <li className={s.Section} id="section-8">
                <div className={s.Section_Title}>
                  <h2>8. Testimonials</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      By using our website, you agree to the use of testimonials
                      or reviews that you provided about the service. We may
                      also use your testimonials or reviews for advertising
                      purposes.
                    </p>
                  </li>
                </ul>
              </li>
              {/* 9 */}
              <li className={s.Section} id="section-9">
                <div className={s.Section_Title}>
                  <h2>9. Security</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Data related to personal information may be stored in a
                      physical/electronic copy or electronic format. Our company
                      takes reasonable precautions to protect personal
                      information. The company may use a variety of
                      administrative, physical, and technical precautions if
                      required to ensure security.
                    </p>
                  </li>
                </ul>
              </li>
              {/* 10 */}
              <li className={s.Section} id="section-10">
                <div className={s.Section_Title}>
                  <h2>10. Links</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Our website&nbsp;
                      <Link href={'http://faqsolution.uk'} target="_blank">
                        http://faqsolution.uk
                      </Link>
                      &nbsp;may contain links to third-party websites. Such
                      links may not be updated or maintained. We have no control
                      over the sites, are not responsible for the content,
                      privacy policies of the linked sites, and have no
                      ownership rights in the linked sites unless otherwise
                      specified. We recommend that you first read the privacy
                      policy of such sites before you use them, as privacy
                      policy may vary.
                    </p>
                  </li>
                </ul>
              </li>
              {/* 11 */}
              <li className={s.Section} id="section-11">
                <div className={s.Section_Title}>
                  <h2>11. Accessing or correcting your personal information</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      By contacting our support, you can get access to personal
                      data that is currently stored. Also consider that in some
                      cases we cannot give you access to your personal data. In
                      such cases, we will explain the reason.
                    </p>
                  </li>
                </ul>
              </li>
              {/* 12 */}
              <li className={s.Section} id="section-12">
                <div className={s.Section_Title}>
                  <h2>12. Making a complaint</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      If you have a complaint or you think that we have violated
                      privacy, you can contact us by email&nbsp;
                      <Link href={'mailto: support@faqsolution.uk'}>
                        support@faqsolution.uk
                      </Link>
                      . Provide a detailed description of the complaint, your
                      name, email address, phone number. Our support will
                      respond to you within a reasonable amount of time.
                    </p>
                  </li>
                </ul>
              </li>
              {/* 13 */}
              <li className={s.Section} id="section-13">
                <div className={s.Section_Title}>
                  <h2>13. Changes to this Privacy Policy</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      Our Company reserves the right to revise this Policy. For
                      example, in accordance with changes in the law, regulatory
                      changes, new policies or the requirements of any
                      authority. You should visit this page to review changes to
                      the Privacy Policy.
                    </p>
                  </li>
                </ul>
              </li>
              {/* 14 */}
              <li className={s.Section} id="section-14">
                <div className={s.Section_Title}>
                  <h2>14. Contact Us</h2>
                </div>

                <ul className={s.Section_Content}>
                  <li className={s.Paragraph}>
                    <p className={s.Paragraph_Description}>
                      You can get more information about our policy, request
                      access or correction of your personal information, or file
                      a complaint by contacting us: &nbsp;
                      <Link href={'mailto: support@faqsolution.uk'}>
                        support@faqsolution.uk
                      </Link>
                      .
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={s.PrivacyPolicy_Sidebar}>
            <div className={s.Sidebar}>
              <div className={s.Sidebar_Header}>
                <p>On this page</p>
              </div>

              <ul className={s.Sidebar_Navbar}>
                {navbar_links?.map((link, index) => {
                  return (
                    <li
                      className={s.Sidebar_Navbar_Item}
                      key={index}
                      onClick={() => handleClickNavbar(index)}
                    >
                      <p>
                        {index + 1}.&nbsp;{link}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default PrivacyPolicy;
