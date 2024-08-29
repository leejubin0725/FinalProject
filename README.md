# FinalProject

### CinemaCloud 

## 프로젝트 개요
**프로젝트 명**: OTT Service 구조를 활용한 비상업 영화 중계 서비스 (Cinema Cloud)  
**수행 기간**: 2024.07.24 ~ 2024.08.16

**개발 목표**:  
본 프로젝트의 목표는 사용자들에게 월 2,000원의 저렴한 구독료로 비상업 영화와 다양한 영상 콘텐츠를 무제한으로 제공하는 OTT(Over-The-Top) 서비스를 개발하는 것입니다. 해당 서비스는 비상업 영화의 상업화를 지양하고, 사용자들에게 개인 맞춤형 콘텐츠를 제공하며, 관리자 페이지를 통해 서비스 운영에 필요한 통계와 시청자 방문 동향 등을 파악할 수 있도록 종합적인 기능을 제공합니다.

## 사용 기술 및 개발 환경
**운영체제**: AWS EC2 (Ubuntu), MacOS  
**사용 언어**: Java, JavaScript, HTML, CSS  
**Framework / Library**: Spring Boot, React, JPA, Lombok  
**Database**: AWS RDS (MySQL)  
**Tool**: IntelliJ IDEA, Maven, Git, Docker  
**WAS**: Tomcat (Spring Boot 내장)  
**Collaboration**: GitHub, Notion  
**Deployment**: AWS EC2, AWS RDS, S3 (정적 파일), Route 53 (도메인 관리)

## 사용 외부 서버 및 API
- **Google Cloud Console**  
- **Amazon S3**: Amazon S3(Amazon Simple Storage Service)는 확장 가능하고 빠른 웹 기반 클라우드 스토리지 서비스입니다.
- **Amazon RDS**: 데이터베이스 분리를 위해 사용되었습니다.
- **Amazon EC2**: 백엔드 서버를 호스팅하는 데 사용되었습니다.

## 구현 기능
※본인 담당 기능은 ●로 표시  
- ● 회원가입 / ● 로그인  
- 이메일 인증, 프로필 관리, 콘텐츠 관리  
- ● 관리자 페이지: 사용자 방문 동향 및 콘텐츠 관리  
- 영화 콘텐츠 CRUD 및 추천 기능  
- ● 구독 결제 및 결제 상태 확인  
- ● OAuth2를 통한 구글 로그인  
- 게시글 작성 및 수정  
- 리뷰 및 댓글 관리

## 담당 역할
- Google OAuth2를 통한 소셜 로그인 기능 구현.
- 구글 계정 연동 및 사용자 인증 처리.
- 사용자 방문 동향 및 구독 상태 분석 기능 개발.
- 구독 결제 및 결제 상태 확인 기능 개발.
- PayPal 연동을 통한 결제 처리 및 환불 시스템 구현.
- AWS EC2, RDS를 사용한 서버 배포 및 데이터베이스 관리.
- S3, Route 53을 통한 정적 파일 관리 및 도메인 설정.

## 프로젝트 참여 소감
이번 프로젝트를 통해 OAuth2 로그인, 결제 시스템 구현, AWS 배포 등 실무에서 필요한 기술을 직접 다뤄볼 수 있었습니다. 특히, 관리자 페이지 개발과 구독 결제 기능을 맡아 사용자 관리와 데이터 분석의 중요성을 배웠습니다. 팀원들과의 협업을 통해 효율적인 개발 프로세스를 경험했으며, 인프라 설계와 배포 과정을 통해 서비스 운영에 대한 이해도도 높아졌습니다. 이번 경험을 통해 개발자로서 한층 성장할 수 있었습니다.
