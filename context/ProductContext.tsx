import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { KO_DATA } from '../i18n/ko';
import { EN_DATA } from '../i18n/en';

export interface Product {
  id: number;
  tag: string;
  title: string;
  desc: string;
  img: string;
}

export interface HomeConfig {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  heroImageUrl: string;
  heroStartUrl: string;
  serviceSubtitle: string;
  serviceTitle: string;
  services: { icon: string; title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
}

export interface FacilityConfig {
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  principles: { icon: string; title: string; desc: string }[];
  certificationTitle: string;
  certificationDesc: string;
  certificationImageUrl: string;
}

export interface ShopConfig {
  url: string;
  companyName: string;
  description: string;
}

export interface AboutConfig {
  introText: string;
  mainImageUrl: string;
}

export interface ProductsConfig {
  introText: string;
  mainImageUrl: string;
}

export interface ContactConfig {
  pageTitle: string;
  pageSubtitle: string;
  formTitle: string;
  heroImageUrl: string;
}

export interface AdminCredentials {
  id: string;
  pw: string;
}

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  lang: 'KO' | 'EN';
}

interface ProductContextType {
  lang: 'KO' | 'EN';
  setLang: (lang: 'KO' | 'EN') => void;
  t: typeof KO_DATA;
  products: Product[];
  updateProduct: (updatedProduct: Product) => void;
  homeConfig: HomeConfig;
  updateHomeConfig: (config: HomeConfig) => void;
  facilityConfig: FacilityConfig;
  updateFacilityConfig: (config: FacilityConfig) => void;
  termsContent: string;
  setTermsContent: (content: string) => void;
  privacyContent: string;
  setPrivacyContent: (content: string) => void;
  shopConfig: ShopConfig;
  updateShopConfig: (config: ShopConfig) => void;
  aboutConfig: AboutConfig;
  updateAboutConfig: (config: AboutConfig) => void;
  productsConfig: ProductsConfig;
  updateProductsConfig: (config: ProductsConfig) => void;
  contactConfig: ContactConfig;
  updateContactConfig: (config: ContactConfig) => void;
  adminCredentials: AdminCredentials;
  updateAdminCredentials: (creds: AdminCredentials) => void;
  inquiries: Inquiry[];
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'lang'>) => void;
  deleteInquiry: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const DEFAULT_TERMS_KO = `제1조 (목적)
본 약관은 인케어바이오(이하 "회사")가 운영하는 웹사이트 및 관련 제반 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

제2조 (용어의 정의)
1. "서비스"라 함은 구현되는 단말기(PC, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 이용자가 이용할 수 있는 회사의 제반 서비스를 의미합니다.
2. "이용자"란 서비스를 이용하는 회원 및 비회원을 의미합니다.
3. "회원"이란 회사의 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.
4. "비회원"이란 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.

제3조 (약관의 명시와 개정)
1. 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
2. 회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
3. 약관을 개정할 경우 개정사유 및 적용일자를 명시하여 현행 약관과 함께 적용일자 7일 전부터 공지합니다.

제4조 (이용계약 체결)
1. 이용계약은 회원이 되고자 하는 자(이하 "가입신청자")가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
2. 회사는 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 회사는 허위 정보 기재나 기술상 지장이 있는 경우 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.

제5조 (회원정보의 변경)
1. 회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.
2. 회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 회사에 그 변경사항을 알려야 합니다.

제6조 (개인정보보호 의무)
회사는 "정보통신망법" 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련 법 및 회사의 개인정보처리방침이 적용됩니다.

제7조 (이용자의 의무)
1. 이용자는 관계 법령, 이 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.
2. 이용자는 다음 행위를 하여서는 안 됩니다.
   - 가입 신청 또는 정보 변경 시 허위 내용 등록
   - 타인의 정보 도용
   - 회사가 게시한 정보의 변경
   - 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
   - 회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해
   - 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위

제8조 (서비스의 제공 및 변경)
1. 회사는 이용자에게 건강기능식품 제조 정보 제공, 맞춤형 영양 솔루션 상담, 제품 구매 서비스 등을 제공합니다.
2. 회사는 기술적 사양의 변경이나 서비스 운영 정책의 변화에 따라 서비스의 내용을 변경할 수 있습니다. 이 경우 변경된 내용과 적용일자를 공지합니다.

제9조 (서비스의 중단)
1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.
2. 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.

제10조 (계약해제, 해지 등)
1. 회원은 언제든지 서비스 초기화면의 고객센터 또는 내 정보 관리 메뉴 등을 통하여 이용계약 해지 신청을 할 수 있으며, 회사는 관련 법령 등이 정하는 바에 따라 이를 즉시 처리하여야 합니다.
2. 회원이 계약을 해지할 경우, 관련 법 및 개인정보처리방침에 따라 회사가 회원정보를 보유하는 경우를 제외하고는 해지 즉시 회원의 모든 데이터는 소멸됩니다.

제11조 (책임제한)
1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
3. 회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못하거나 서비스를 통하여 얻은 자료로 인한 손해 등에 대하여 책임을 지지 않습니다.

제12조 (준거법 및 재판관할)
1. 회사와 이용자 간 제기된 소송은 대한민국법을 준거법으로 합니다.
2. 회사와 이용자 간 발생한 분쟁에 관한 소송은 민사소송법 상의 관할법원에 제기합니다.

부칙
본 약관은 2025년 1월 1일부터 적용됩니다.`;

const DEFAULT_TERMS_EN = `Article 1 (Purpose)
These Terms and Conditions aim to define the rights, obligations, and responsibilities of IncareBio (the "Company") and its users regarding the use of the website and all related services (the "Service") provided by the Company.

Article 2 (Definitions)
1. "Service" means all services provided by the Company that users can utilize regardless of the device used (including various wired and wireless devices such as PCs and portable terminals).
2. "User" refers to both members and non-members who use the Service.
3. "Member" refers to a customer who accesses the Company's Service, concludes a user agreement in accordance with these Terms and Conditions, and uses the services provided by the Company.
4. "Non-member" refers to a person who uses the services provided by the Company without joining as a member.

Article 3 (Specification and Revision of Terms)
1. The Company shall post the contents of these Terms and Conditions on the initial screen of the service so that users can easily recognize them.
2. The Company may revise these Terms within the scope not violating relevant laws such as the "Act on the Regulation of Terms and Conditions" and the "Act on Promotion of Information and Communications Network Utilization and Information Protection, etc."
3. When revising the Terms, the Company shall announce the reason for the revision and the application date along with the current Terms at least 7 days before the application date.

Article 4 (Conclusion of User Agreement)
1. A user agreement is concluded when a person who wishes to become a member (the "Applicant") agrees to the contents of the Terms, applies for membership, and the Company accepts such application.
2. In principle, the Company shall accept the Applicant's application to use the service. However, the Company may not accept an application or may terminate a user agreement afterwards in the event of false information or technical issues.

Article 5 (Change of Member Information)
1. Members can view and modify their personal information at any time through the personal information management screen.
2. If the details provided at the time of application for membership have changed, the member must modify them online or notify the Company of the changes by e-mail or other methods.

Article 6 (Obligation for Personal Information Protection)
The Company strives to protect the personal information of members as prescribed by relevant laws such as the "Information and Communications Network Act." The protection and use of personal information are governed by relevant laws and the Company's Privacy Policy.

Article 7 (Obligations of Users)
1. Users must comply with relevant laws, the provisions of these Terms, usage guidelines, and notices regarding the service, and must not perform any acts that interfere with the Company's business.
2. Users shall not perform the following acts:
   - Registering false information when applying or changing details
   - Stealing someone else's information
   - Changing information posted by the Company
   - Transmitting or posting information (computer programs, etc.) other than information specified by the Company
   - Infringing on intellectual property rights such as copyrights of the Company and other third parties
   - Damaging the reputation or interfering with the business of the Company and other third parties

Article 8 (Provision and Change of Service)
1. The Company provides users with health functional food manufacturing information, personalized nutrition solution consultation, and product purchase services.
2. The Company may change the contents of the service due to changes in technical specifications or service operation policies. In this case, the changed contents and application date will be announced.

Article 9 (Suspension of Service)
1. The Company may temporarily suspend the provision of service in the event of maintenance, inspection, replacement, breakdown of information and communication facilities such as computers, communication interruption, or substantial operational reasons.
2. The Company shall compensate for damages suffered by users or third parties due to the temporary suspension of service for the reasons specified in Paragraph 1, unless the Company proves that there was no intentional or negligent act.

Article 10 (Termination of Agreement, etc.)
1. A member may apply for termination of the user agreement at any time through the Customer Center or the Information Management menu, and the Company must process it immediately as prescribed by relevant laws.
2. When a member terminates the agreement, all data of the member will be deleted immediately, except where the Company retains member information in accordance with relevant laws and the Privacy Policy.

Article 11 (Limitation of Liability)
1. The Company shall be exempted from liability for service provision if it is unable to provide services due to natural disasters or equivalent force majeure.
2. The Company is not responsible for any hindrance to service use due to reasons attributable to the user.
3. The Company is not responsible for any failure of the user to achieve expected profits through the service or any damages caused by materials obtained through the service.

Article 12 (Governing Law and Jurisdiction)
1. Any lawsuit filed between the Company and a user shall be governed by the laws of the Republic of Korea.
2. Lawsuits regarding disputes arising between the Company and a user shall be brought to the competent court under the Civil Procedure Act.

Addendum
These Terms and Conditions shall apply starting from January 1, 2025.`;

const DEFAULT_PRIVACY_KO = `인케어바이오 개인정보처리방침

인케어바이오(이하 '회사')는 이용자의 개인정보를 매우 중요하게 생각하며, '개인정보 보호법' 및 '정보통신망 이용촉진 및 정보보호 등에 관한 법률' 등 관련 법령을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

제1조 (수집하는 개인정보 항목 및 수집방법)
1. 수집항목
   - 필수항목: 이름, 이메일 주소, 비밀번호, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보
   - 선택항목: 전화번호, 회사명, 관심 제품군, 상담 내용
2. 수집방법: 홈페이지(회원가입, 1:1 문의, 견적 상담), 생성정보 수집 툴을 통한 자동 수집

제2조 (개인정보의 수집 및 이용목적)
회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
1. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
2. 회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 불만처리 등 민원처리, 고지사항 전달
3. 마케팅 및 광고에 활용: 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계

제3조 (개인정보의 보유 및 이용기간)
회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
1. 회사 내부 방침에 의한 정보보유 사유
   - 부정이용기록: 1년 (부정이용 방지)
2. 관련 법령에 의한 정보보유 사유
   - 방문에 관한 기록: 3개월 (통신비밀보호법)
   - 소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)
   - 계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)

제4조 (개인정보의 파기절차 및 방법)
회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
1. 파기절차: 이용자가 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.
2. 파기방법: 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.

제5조 (개인정보의 제3자 제공)
회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
1. 이용자들이 사전에 동의한 경우
2. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우

제6조 (수집한 개인정보의 위탁)
회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다.
- 위탁 대상자: [위탁 업체명 입력 필요]
- 위탁 업무 내용: 시스템 유지보수, 고객 상담 지원, 배송 서비스 등

제7조 (이용자 및 법정대리인의 권리와 그 행사방법)
1. 이용자 및 법정대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 열람하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
2. 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.

제8조 (개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항)
회사는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다. 귀하는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 거부할 수 있습니다.

제9조 (개인정보 보호책임자 및 담당부서)
회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호책임자를 지정하고 있습니다.
- 개인정보 보호책임자: [책임자 성명]
- 이메일: info@incarebio.co.kr
- 전화번호: 1588-1234

제10조 (고지의 의무)
현 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 홈페이지의 '공지사항'을 통해 고지할 것입니다.

시행일자: 2025년 1월 1일`;

const DEFAULT_PRIVACY_EN = `IncareBio Privacy Policy

IncareBio (the 'Company') values the personal information of users and complies with relevant laws such as the 'Personal Information Protection Act' and the 'Act on Promotion of Information and Communications Network Utilization and Information Protection, etc.' Through this Privacy Policy, the Company informs you of the purposes and methods for which the personal information provided by users is used and what measures are being taken to protect personal information.

Article 1 (Items of Personal Information Collected and Collection Method)
1. Collected Items
   - Required Items: Name, Email address, Password, Service usage records, Access logs, Cookies, Access IP information
   - Optional Items: Phone number, Company name, Interested product categories, Consultation details
2. Collection Method: Website (Membership registration, 1:1 inquiry, Estimate consultation), automatic collection via generation information collection tools

Article 2 (Purpose of Collection and Use of Personal Information)
The Company utilizes the collected personal information for the following purposes:
1. Performance of contracts regarding service provision and fee settlement according to service provision
2. Member Management: Identity verification for use of membership services, personal identification, prevention of fraudulent use and unauthorized use by bad members, confirmation of intent to join, handling of civil complaints such as dissatisfaction handling, and delivery of notices
3. Utilization in Marketing and Advertising: Development and specialization of new services (products), delivery of advertising information such as events, and statistics on access frequency or member service usage

Article 3 (Retention and Use Period of Personal Information)
In principle, after the purpose of collection and use of personal information is achieved, the information is destroyed without delay. However, the following information is preserved for the period specified for the reasons below.
1. Reasons for information retention according to internal company policy
   - Fraudulent use records: 1 year (to prevent fraudulent use)
2. Reasons for information retention according to relevant laws
   - Records on visits: 3 months (Protection of Communications Secrets Act)
   - Records on consumer complaints or dispute handling: 3 years (Act on the Consumer Protection in Electronic Commerce, etc.)
   - Records on contracts or withdrawal of subscription, etc.: 5 years (Act on the Consumer Protection in Electronic Commerce, etc.)

Article 4 (Procedures and Methods of Destruction of Personal Information)
In principle, after the purpose of collection and use of personal information is achieved, the information is destroyed without delay. The procedures and methods of destruction are as follows:
1. Destruction Procedure: Information entered by users is moved to a separate database after the purpose is achieved and stored for a certain period according to internal policies and other relevant laws before being destroyed.
2. Destruction Method: Personal information stored in electronic file format is deleted using technical methods that cannot reproduce the records. Personal information printed on paper is destroyed by shredding with a shredder or incineration.

Article 5 (Provision of Personal Information to Third Parties)
In principle, the Company does not provide users' personal information to the outside. However, exceptions are made in the following cases:
1. If users have agreed in advance
2. If there is a request from investigative agencies in accordance with the procedures and methods set forth in laws for the purpose of investigation

Article 6 (Outsourcing of Collected Personal Information)
The Company entrusts the operation to external specialized companies as follows for the performance of services:
- Entrustee: [Required to enter the name of the entrusted company]
- Contents of entrusted business: System maintenance, customer consultation support, delivery services, etc.

Article 7 (Rights of Users and Legal Representatives and How to Exercise Them)
1. Users and legal representatives can view or modify the personal information of themselves or children under the age of 14 at any time and request termination of membership.
2. If a user requests correction of errors in personal information, the personal information will not be used or provided until the correction is completed.

Article 8 (Installation, Operation, and Rejection of Automatic Collection Devices of Personal Information)
The Company operates 'cookies' that store and find your information from time to time. You have the choice regarding cookie installation and can allow all cookies or refuse them by setting options in your web browser.

Article 9 (Personal Information Protection Officer and Department)
The Company designates relevant departments and a Personal Information Protection Officer as follows to protect users' personal information and handle complaints related to personal information:
- Personal Information Protection Officer: [Name of Officer]
- Email: info@incarebio.co.kr
- Phone: 1588-1234

Article 10 (Obligation of Notice)
If there is any addition, deletion, or modification to the contents of this Privacy Policy, it will be notified through the 'Notice' on the website at least 7 days before the revision.

Effective Date: January 1, 2025`;

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getStoredItem = (key: string, defaultValue: any) => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved);
      return defaultValue;
    } catch (e) {
      return defaultValue;
    }
  };

  const [lang, setLangState] = useState<'KO' | 'EN'>(() => (localStorage.getItem('appLang') as any) || 'KO');
  const t = lang === 'KO' ? KO_DATA : EN_DATA;

  const getInitialHome = (l: 'KO' | 'EN') => {
    const curT = l === 'KO' ? KO_DATA : EN_DATA;
    return {
      ...curT.home,
      heroImageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2069&auto=format&fit=crop',
      heroStartUrl: '#/contact',
      services: [
        { 
          icon: 'hub', 
          title: l === 'KO' ? 'OEM/ODM 토탈 서비스' : 'OEM/ODM Total Service', 
          desc: l === 'KO' ? '컨셉 기획부터 원료 선정, 배합 설계, 완제품 생산까지 전 과정을 원스톱으로 지원합니다.' : 'We provide one-stop support for the entire process from concept planning to material selection, formulation, and production.' 
        },
        { 
          icon: 'precision_manufacturing', 
          title: l === 'KO' ? '스마트 팩토리 운영' : 'Smart Factory Operation', 
          desc: l === 'KO' ? 'GMP/HACCP 인증 기반의 자동화 설비로 고품질 제품을 정밀하게 생산합니다.' : 'Precision production of high-quality products using automated equipment based on GMP/HACCP certification.' 
        },
        { 
          icon: 'science', 
          title: l === 'KO' ? '전문 R&D 센터' : 'Expert R&D Center', 
          desc: l === 'KO' ? '독자적인 포뮬러 개발과 최신 기능성 원료 연구로 시장 경쟁력을 강화합니다.' : 'Strengthen market competitiveness through independent formula development and latest functional material research.' 
        }
      ]
    };
  };

  const getInitialFacility = (l: 'KO' | 'EN') => {
    return {
      heroTitle: l === 'KO' ? '최첨단 제조시설' : 'State-of-the-art Facility',
      heroSubtitle: l === 'KO' ? '엄격한 품질 관리 시스템' : 'Strict Quality Control System',
      heroImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGQKj5M3L-nPCNn_GKUV7yxZi9LjxuGkt-UZCWvyZQmDEsStLTTe2XQIksVsLdqAxVDNz5huWRKVjKS4x0E-SX6JOycGzlBQhK1rNKeCjEUsw1kdbvWZnprQVq3Nl9coS_-9ti6Ms-F_9136F4_d_t_RzmsJvcvoJhgISKnhoW3MmqKVcJaT71UST1tHrw_3KJ74KDd0qs-TFuzRxOWH3iuCwpjAEKMfpzKP89TUd2un-gEf624Z6oX4l7MFPUWH-vJJkVRo8aiI0',
      principles: [
        { icon: 'verified', title: l === 'KO' ? '안정성 보장' : 'Safety Guaranteed', desc: l === 'KO' ? '모든 제조 공정은 국제 안전 기준을 준수합니다.' : 'All manufacturing processes comply with international safety standards.' },
        { icon: 'psychology', title: l === 'KO' ? '기술 혁신' : 'Tech Innovation', desc: l === 'KO' ? '끊임없는 기술 개발로 정밀 제조를 실현합니다.' : 'Realizing precision manufacturing through constant development.' },
        { icon: 'high_quality', title: l === 'KO' ? '최상급 원료' : 'Premium Ingredients', desc: l === 'KO' ? '전 세계에서 엄선한 최상급 원료만을 사용합니다.' : 'Only top-grade ingredients carefully selected worldwide.' }
      ],
      certificationTitle: l === 'KO' ? '품질 및 안전 인증' : 'Quality & Safety Certifications',
      certificationDesc: l === 'KO' ? 'IncareBio는 GMP, HACCP, ISO 등 글로벌 표준 인증을 획득하여 소비자에게 가장 안전한 제품만을 제공할 것을 약속드립니다.' : 'IncareBio promises to provide only the safest products by obtaining global standard certifications such as GMP, HACCP, and ISO.',
      certificationImageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
    };
  };

  const [products, setProducts] = useState<Product[]>(() => getStoredItem(`products_${lang}`, t.products.items));
  const [homeConfig, setHomeConfig] = useState<HomeConfig>(() => getStoredItem(`homeConfig_${lang}`, getInitialHome(lang)));
  const [facilityConfig, setFacilityConfig] = useState<FacilityConfig>(() => getStoredItem(`facilityConfig_${lang}`, getInitialFacility(lang)));
  const [termsContent, setTermsContentState] = useState<string>(() => localStorage.getItem(`termsContent_${lang}`) || (lang === 'KO' ? DEFAULT_TERMS_KO : DEFAULT_TERMS_EN));
  const [privacyContent, setPrivacyContentState] = useState<string>(() => localStorage.getItem(`privacyContent_${lang}`) || (lang === 'KO' ? DEFAULT_PRIVACY_KO : DEFAULT_PRIVACY_EN));
  const [shopConfig, setShopConfig] = useState<ShopConfig>(() => getStoredItem(`shopConfig_${lang}`, { url: '', companyName: '', description: '' }));
  const [aboutConfig, setAboutConfig] = useState<AboutConfig>(() => getStoredItem(`aboutConfig_${lang}`, {
    introText: lang === 'KO' ? '과학적 데이터와 기술력을 바탕으로\n인류의 건강한 수명 연장을 실현합니다.' : 'Realizing healthy life extension for mankind\nbased on scientific data and technology.',
    mainImageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop'
  }));
  const [productsConfig, setProductsConfig] = useState<ProductsConfig>(() => getStoredItem(`productsConfig_${lang}`, {
    introText: lang === 'KO' ? '개인의 건강 데이터를 분석하여 최적화된 영양 솔루션을 제공합니다.' : 'We provide optimized nutritional solutions by analyzing individual health data.',
    mainImageUrl: 'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?q=80&w=2070&auto=format&fit=crop'
  }));
  const [contactConfig, setContactConfig] = useState<ContactConfig>(() => getStoredItem(`contactConfig_${lang}`, {
    pageTitle: t.contact.pageTitle,
    pageSubtitle: t.contact.pageSubtitle,
    formTitle: t.contact.formTitle,
    heroImageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop'
  }));

  const [adminCredentials, setAdminCredentials] = useState<AdminCredentials>(() => getStoredItem('adminCredentials', { id: 'admin', pw: '121212' }));
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => getStoredItem('inquiries', []));

  useEffect(() => {
    localStorage.setItem('appLang', lang);
  }, [lang]);

  useEffect(() => {
    const curT = lang === 'KO' ? KO_DATA : EN_DATA;
    
    setHomeConfig(getStoredItem(`homeConfig_${lang}`, getInitialHome(lang)));
    setFacilityConfig(getStoredItem(`facilityConfig_${lang}`, getInitialFacility(lang)));
    setProducts(getStoredItem(`products_${lang}`, curT.products.items));
    setShopConfig(getStoredItem(`shopConfig_${lang}`, { url: '', companyName: '', description: '' }));
    
    setAboutConfig(getStoredItem(`aboutConfig_${lang}`, {
      introText: lang === 'KO' ? '과학적 데이터와 기술력을 바탕으로\n인류의 건강한 수명 연장을 실현합니다.' : 'Realizing healthy life extension for mankind\nbased on scientific data and technology.',
      mainImageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop'
    }));

    setProductsConfig(getStoredItem(`productsConfig_${lang}`, {
      introText: lang === 'KO' ? '개인의 건강 데이터를 분석하여 최적화된 영양 솔루션을 제공합니다.' : 'We provide optimized nutritional solutions by analyzing individual health data.',
      mainImageUrl: 'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?q=80&w=2070&auto=format&fit=crop'
    }));

    setContactConfig(getStoredItem(`contactConfig_${lang}`, {
      pageTitle: curT.contact.pageTitle,
      pageSubtitle: curT.contact.pageSubtitle,
      formTitle: curT.contact.formTitle,
      heroImageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop'
    }));

    setTermsContentState(localStorage.getItem(`termsContent_${lang}`) || (lang === 'KO' ? DEFAULT_TERMS_KO : DEFAULT_TERMS_EN));
    setPrivacyContentState(localStorage.getItem(`privacyContent_${lang}`) || (lang === 'KO' ? DEFAULT_PRIVACY_KO : DEFAULT_PRIVACY_EN));

  }, [lang]);

  const setLang = (newLang: 'KO' | 'EN') => setLangState(newLang);
  const updateProduct = (up: Product) => setProducts(p => {
    const updated = p.map(pi => pi.id === up.id ? up : pi);
    localStorage.setItem(`products_${lang}`, JSON.stringify(updated));
    return updated;
  });

  const updateHomeConfig = (config: HomeConfig) => { setHomeConfig(config); localStorage.setItem(`homeConfig_${lang}`, JSON.stringify(config)); };
  const updateFacilityConfig = (config: FacilityConfig) => { setFacilityConfig(config); localStorage.setItem(`facilityConfig_${lang}`, JSON.stringify(config)); };
  const updateAboutConfig = (config: AboutConfig) => { setAboutConfig(config); localStorage.setItem(`aboutConfig_${lang}`, JSON.stringify(config)); };
  const updateContactConfig = (config: ContactConfig) => { setContactConfig(config); localStorage.setItem(`contactConfig_${lang}`, JSON.stringify(config)); };

  const addInquiry = (d: Omit<Inquiry, 'id' | 'date' | 'lang'>) => {
    const newInquiry: Inquiry = { ...d, id: Date.now(), date: new Date().toISOString(), lang };
    setInquiries(prev => {
      const updated = [newInquiry, ...prev];
      localStorage.setItem('inquiries', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ProductContext.Provider value={{ 
      lang, setLang, t,
      products, updateProduct,
      homeConfig, updateHomeConfig,
      facilityConfig, updateFacilityConfig,
      termsContent, setTermsContent: (c) => { setTermsContentState(c); localStorage.setItem(`termsContent_${lang}`, c); },
      privacyContent, setPrivacyContent: (c) => { setPrivacyContentState(c); localStorage.setItem(`privacyContent_${lang}`, c); },
      shopConfig, updateShopConfig: (c) => { setShopConfig(c); localStorage.setItem(`shopConfig_${lang}`, JSON.stringify(c)); },
      aboutConfig, updateAboutConfig,
      productsConfig, updateProductsConfig: (c) => { setProductsConfig(c); localStorage.setItem(`productsConfig_${lang}`, JSON.stringify(c)); },
      contactConfig, updateContactConfig,
      adminCredentials, updateAdminCredentials: (c) => { setAdminCredentials(c); localStorage.setItem('adminCredentials', JSON.stringify(c)); },
      inquiries, addInquiry,
      deleteInquiry: (id) => setInquiries(p => {
        const updated = p.filter(i => i.id !== id);
        localStorage.setItem('inquiries', JSON.stringify(updated));
        return updated;
      })
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProducts must be used within a ProductProvider');
  return context;
};