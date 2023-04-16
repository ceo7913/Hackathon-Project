# 프로젝트명
스마트시티 ESG 친환경 AI 관리시스템 및 플랫폼 

## 유튜브 시연 영상 링크 
https://www.youtube.com/watch?v=xsvH_dClMfg&feature=youtu.be

## 프로젝트 멤버
강신석(BACK), 임준우(FRONT), 최제호(BLOCK-CHAIN)

## 프로젝트 목적
- React 활용능력 개선

- tailwind 활용능력 개선

- 컴포넌트에 대한 이해

- 재사용에 대한 효율 증가를 위해 활용 범위 확대

- 기획과 문서 작성부터 개발, 형상관리, 테스트, 배포까지 개발 프로세스 전반을 경험

- 랜더링 최적화에 대한 고민

- 오픈 api 사용한 데이터 가져오기 

## 사용한 스택
<img src="https://user-images.githubusercontent.com/106497516/225558093-03353cb1-d69f-487d-9ac0-61bd41cb6bbc.png" alt="stack-img"/>

## 프로젝트 정보
- 프로젝트 상세 구성
  - 프론트엔드
    > 리액트 기반의 홈페이지 구현
    
    > tailwind 적용으로 일관성 있는 디자인 적용
    
  - 백엔드
    > MongoDB 를 사용하여 데이터 베이스를 구축
    
    > AWS 서비스로 배포
    
  - 블록체인
    > 하이퍼레저 패브릭에 중요 데이터를 저장
    
    > 게이트웨이 서버에서 블록체인 데이터에 송신 구현
    
- 주요 업무 
  > 페이지 디자인 및 기획
  
  > 페이지 제작 및 레이아웃 적용
  
  > 애니메이션 구현
  
  > style 작업
  
  > map api 활용 DB 통신
    
- 리액트를 사용한 이유?
  > 컴포넌트를 사용하기 때문에 재사용과 유지보수가 용이하고 Virtual Dom 을 사용하기 때문에 불필요한 랜더링을 줄이기 위해서 사용하였음

- tailwind 를 사용한 이유?
  > tailwind 를 사용한 이유에 대해서는 크게 세가지 이유가 있었는데 첫번째는 css 에 능한 시니어 개발자들이 최근 tailwind 를 사용하는 빈도수가 늘었기 때문에 본인 또한 사용해 보고자
  하는 의도가 있었음, 두번째는 Class 의 이름을 일일이 지정해주지 않아도 된다는것, 세번째는 일관성 있는 디자인을 적용하기 위해서 사용하였음

## 이슈 및 배운점
> [각각의 거래소의 코인을 선택했을때 해당 코인이 업데이트 되지 않는 이슈] (https://github.com/ceo7913/Hackathon-Project/issues/1)

## 샘플 GIF (2배속)
<img src="https://im4.ezgif.com/tmp/ezgif-4-de178f0fba.gif" alt="1">
<img src="https://im4.ezgif.com/tmp/ezgif-4-0d162268b1.gif" alt="2">
<img src="https://im4.ezgif.com/tmp/ezgif-4-a23546d5f2.gif" alt="3">
<img src="https://im4.ezgif.com/tmp/ezgif-4-dc8e5e2843.gif" alt="4">


## src 파일 구조 

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂css
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜_breadcrumb.css
 ┃ ┃ ┃ ┣ 📜_chat-dropdown.css
 ┃ ┃ ┃ ┣ 📜_chat.css
 ┃ ┃ ┃ ┣ 📜_ckeditor.css
 ┃ ┃ ┃ ┣ 📜_content.css
 ┃ ┃ ┃ ┣ 📜_dark-mode-switcher.css
 ┃ ┃ ┃ ┣ 📜_dropzone.css
 ┃ ┃ ┃ ┣ 📜_error-page.css
 ┃ ┃ ┃ ┣ 📜_full-calendar.css
 ┃ ┃ ┃ ┣ 📜_global.css
 ┃ ┃ ┃ ┣ 📜_hljs.css
 ┃ ┃ ┃ ┣ 📜_inbox-filter.css
 ┃ ┃ ┃ ┣ 📜_inbox.css
 ┃ ┃ ┃ ┣ 📜_litepicker.css
 ┃ ┃ ┃ ┣ 📜_login.css
 ┃ ┃ ┃ ┣ 📜_lucide-icon.css
 ┃ ┃ ┃ ┣ 📜_mobile-menu.css
 ┃ ┃ ┃ ┣ 📜_news.css
 ┃ ┃ ┃ ┣ 📜_notification-content.css
 ┃ ┃ ┃ ┣ 📜_notification.css
 ┃ ┃ ┃ ┣ 📜_pos-dropdown.css
 ┃ ┃ ┃ ┣ 📜_post.css
 ┃ ┃ ┃ ┣ 📜_pricing-tabs.css
 ┃ ┃ ┃ ┣ 📜_pristine.css
 ┃ ┃ ┃ ┣ 📜_report-box-2.css
 ┃ ┃ ┃ ┣ 📜_report-box-3.css
 ┃ ┃ ┃ ┣ 📜_report-box-4.css
 ┃ ┃ ┃ ┣ 📜_report-box.css
 ┃ ┃ ┃ ┣ 📜_report-chart.css
 ┃ ┃ ┃ ┣ 📜_report-maps.css
 ┃ ┃ ┃ ┣ 📜_search-result.css
 ┃ ┃ ┃ ┣ 📜_search.css
 ┃ ┃ ┃ ┣ 📜_side-nav.css
 ┃ ┃ ┃ ┣ 📜_source-preview.css
 ┃ ┃ ┃ ┣ 📜_table-report.css
 ┃ ┃ ┃ ┣ 📜_tabulator.css
 ┃ ┃ ┃ ┣ 📜_tiny-slider.css
 ┃ ┃ ┃ ┣ 📜_tippy.css
 ┃ ┃ ┃ ┣ 📜_toastify-content.css
 ┃ ┃ ┃ ┣ 📜_toastify.css
 ┃ ┃ ┃ ┣ 📜_tom-select.css
 ┃ ┃ ┃ ┣ 📜_top-bar-boxed.css
 ┃ ┃ ┃ ┣ 📜_top-nav.css
 ┃ ┃ ┃ ┗ 📜_zoom-vanilla.css
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┗ 📜_roboto.css
 ┃ ┃ ┣ 📜app.css
 ┃ ┃ ┣ 📜_colors.css
 ┃ ┃ ┗ 📜_tailwind.css
 ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📂roboto
 ┃ ┃ ┃ ┣ 📜LICENSE.txt
 ┃ ┃ ┃ ┣ 📜Roboto-Black.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-BlackItalic.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-Bold.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-BoldItalic.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-Italic.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-Light.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-LightItalic.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-Medium.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-MediumItalic.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-Regular.ttf
 ┃ ┃ ┃ ┣ 📜Roboto-Thin.ttf
 ┃ ┃ ┃ ┗ 📜Roboto-ThinItalic.ttf
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂placeholders
 ┃ ┃ ┃ ┣ 📜200x200.jpg
 ┃ ┃ ┃ ┗ 📜800x800.jpg
 ┃ ┃ ┣ 📜bg-login-page-dark.svg
 ┃ ┃ ┣ 📜bg-login-page.svg
 ┃ ┃ ┣ 📜error-illustration.svg
 ┃ ┃ ┣ 📜food-beverage-1.jpg
 ┃ ┃ ┣ 📜food-beverage-10.jpg
 ┃ ┃ ┣ 📜food-beverage-11.jpg
 ┃ ┃ ┣ 📜food-beverage-12.jpg
 ┃ ┃ ┣ 📜food-beverage-13.jpg
 ┃ ┃ ┣ 📜food-beverage-14.jpg
 ┃ ┃ ┣ 📜food-beverage-15.jpg
 ┃ ┃ ┣ 📜food-beverage-16.jpg
 ┃ ┃ ┣ 📜food-beverage-17.jpg
 ┃ ┃ ┣ 📜food-beverage-18.jpg
 ┃ ┃ ┣ 📜food-beverage-19.jpg
 ┃ ┃ ┣ 📜food-beverage-2.jpg
 ┃ ┃ ┣ 📜food-beverage-3.jpg
 ┃ ┃ ┣ 📜food-beverage-4.jpg
 ┃ ┃ ┣ 📜food-beverage-5.jpg
 ┃ ┃ ┣ 📜food-beverage-6.jpg
 ┃ ┃ ┣ 📜food-beverage-7.jpg
 ┃ ┃ ┣ 📜food-beverage-8.jpg
 ┃ ┃ ┣ 📜food-beverage-9.jpg
 ┃ ┃ ┣ 📜illustration.svg
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┣ 📜map-marker-dark.svg
 ┃ ┃ ┣ 📜map-marker-region-dark.svg
 ┃ ┃ ┣ 📜map-marker-region.png
 ┃ ┃ ┣ 📜map-marker-region.svg
 ┃ ┃ ┣ 📜map-marker.png
 ┃ ┃ ┣ 📜map-marker.svg
 ┃ ┃ ┣ 📜phone-illustration.svg
 ┃ ┃ ┣ 📜preview-1.jpg
 ┃ ┃ ┣ 📜preview-10.jpg
 ┃ ┃ ┣ 📜preview-11.jpg
 ┃ ┃ ┣ 📜preview-12.jpg
 ┃ ┃ ┣ 📜preview-13.jpg
 ┃ ┃ ┣ 📜preview-14.jpg
 ┃ ┃ ┣ 📜preview-15.jpg
 ┃ ┃ ┣ 📜preview-2.jpg
 ┃ ┃ ┣ 📜preview-3.jpg
 ┃ ┃ ┣ 📜preview-4.jpg
 ┃ ┃ ┣ 📜preview-5.jpg
 ┃ ┃ ┣ 📜preview-6.jpg
 ┃ ┃ ┣ 📜preview-7.jpg
 ┃ ┃ ┣ 📜preview-8.jpg
 ┃ ┃ ┣ 📜preview-9.jpg
 ┃ ┃ ┣ 📜profile-1.jpg
 ┃ ┃ ┣ 📜profile-10.jpg
 ┃ ┃ ┣ 📜profile-11.jpg
 ┃ ┃ ┣ 📜profile-12.jpg
 ┃ ┃ ┣ 📜profile-13.jpg
 ┃ ┃ ┣ 📜profile-14.jpg
 ┃ ┃ ┣ 📜profile-15.jpg
 ┃ ┃ ┣ 📜profile-2.jpg
 ┃ ┃ ┣ 📜profile-3.jpg
 ┃ ┃ ┣ 📜profile-4.jpg
 ┃ ┃ ┣ 📜profile-5.jpg
 ┃ ┃ ┣ 📜profile-6.jpg
 ┃ ┃ ┣ 📜profile-7.jpg
 ┃ ┃ ┣ 📜profile-8.jpg
 ┃ ┃ ┣ 📜profile-9.jpg
 ┃ ┃ ┗ 📜woman-illustration.svg
 ┃ ┗ 📂json
 ┃ ┃ ┗ 📜location.json
 ┣ 📂base-components
 ┃ ┣ 📂accordion
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂alert
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂calendar
 ┃ ┃ ┣ 📜Draggable.jsx
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂candleChart
 ┃ ┃ ┗ 📜ApexChartTest.jsx
 ┃ ┣ 📂chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂ckeditor
 ┃ ┃ ┣ 📜BalloonBlockEditor.jsx
 ┃ ┃ ┣ 📜BalloonEditor.jsx
 ┃ ┃ ┣ 📜ClassicEditor.jsx
 ┃ ┃ ┣ 📜DocumentEditor.jsx
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜InlineEditor.jsx
 ┃ ┣ 📂dropdown
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂dropzone
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂google-map-loader
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂litepicker
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂loading-icon
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂lucide
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂modal
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂notification
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂preview-component
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂scroll-to-top
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂tab
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂tiny-slider
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂tippy
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂tippy-content
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂tom-select
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┗ 📜index.js
 ┣ 📂components
 ┃ ┣ 📂calendar
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂candleChart
 ┃ ┃ ┗ 📜CandleChart.jsx
 ┃ ┣ 📂dark-mode-switcher
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂donut-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂horizontal-bar-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂line-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂main-color-switcher
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂mobile-menu
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂pie-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂report-bar-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂report-bar-chart-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂report-donut-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂report-donut-chart-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂report-donut-chart-2
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂report-line-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂report-map
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂report-pie-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂side-menu-tooltip
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂simple-line-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂simple-line-chart-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂simple-line-chart-2
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂simple-line-chart-3
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂simple-line-chart-4
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂stacked-bar-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂stacked-bar-chart-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂top-bar
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜KakaoTalk_20221028_181416490.png
 ┃ ┃ ┃ ┣ 📜mainprofile.png
 ┃ ┃ ┃ ┣ 📜profile_1.png
 ┃ ┃ ┃ ┣ 📜profile_10.png
 ┃ ┃ ┃ ┣ 📜profile_11.png
 ┃ ┃ ┃ ┣ 📜profile_2.png
 ┃ ┃ ┃ ┣ 📜profile_3.png
 ┃ ┃ ┃ ┣ 📜profile_4.png
 ┃ ┃ ┃ ┣ 📜profile_5.png
 ┃ ┃ ┃ ┣ 📜profile_6.png
 ┃ ┃ ┃ ┣ 📜profile_7.png
 ┃ ┃ ┃ ┣ 📜profile_8.png
 ┃ ┃ ┃ ┣ 📜profile_9.png
 ┃ ┃ ┃ ┗ 📜인피니티.png
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂vertical-bar-chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📜Orderbook.jsx
 ┃ ┣ 📜Orderbooks.jsx
 ┃ ┣ 📜OrderPanel.jsx
 ┃ ┣ 📜PricePanel.jsx
 ┃ ┣ 📜PricePanelRecycle.jsx
 ┃ ┗ 📜PricePanelSmall.jsx
 ┣ 📂layouts
 ┃ ┣ 📂side-menu
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂simple-menu
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┗ 📂top-menu
 ┃ ┃ ┗ 📜Main.jsx
 ┣ 📂redux
 ┃ ┣ 📂reducer
 ┃ ┃ ┣ 📜coinReducer.js
 ┃ ┃ ┣ 📜exchangeReducer.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜loginReducer.js
 ┃ ┃ ┣ 📜myAssetReducer.js
 ┃ ┃ ┣ 📜transferAssetReducer.js
 ┃ ┃ ┗ 📜userReducer.js
 ┃ ┣ 📜apiActions.js
 ┃ ┗ 📜store.js
 ┣ 📂router
 ┃ ┗ 📜index.jsx
 ┣ 📂socket
 ┃ ┗ 📜index.js
 ┣ 📂stores
 ┃ ┣ 📜color-scheme.js
 ┃ ┣ 📜dark-mode.js
 ┃ ┣ 📜side-menu.js
 ┃ ┣ 📜simple-menu.js
 ┃ ┗ 📜top-menu.js
 ┣ 📂utils
 ┃ ┣ 📜colors.js
 ┃ ┣ 📜faker.js
 ┃ ┣ 📜helper.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜timeForToday.js
 ┣ 📂views
 ┃ ┣ 📂accordion
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂add-product
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂alert
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂blog-layout-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂blog-layout-2
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂blog-layout-3
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂button
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂calendar
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂categories
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂change-password
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂chart
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂chat
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂crud-data-list
 ┃ ┃ ┣ 📜green.json
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┗ 📜Test.jsx
 ┃ ┣ 📂crud-form
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-0
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-1
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜Order.css
 ┃ ┃ ┃ ┣ 📜Orderbook.css
 ┃ ┃ ┃ ┣ 📜Trade.css
 ┃ ┃ ┃ ┗ 📜TradingSimulator.css
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-2
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜Order.css
 ┃ ┃ ┃ ┣ 📜Orderbook.css
 ┃ ┃ ┃ ┣ 📜Trade.css
 ┃ ┃ ┃ ┗ 📜TradingSimulator.css
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-3
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜Order.css
 ┃ ┃ ┃ ┣ 📜Orderbook.css
 ┃ ┃ ┃ ┣ 📜Trade.css
 ┃ ┃ ┃ ┗ 📜TradingSimulator.css
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-4
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜Order.css
 ┃ ┃ ┃ ┣ 📜Orderbook.css
 ┃ ┃ ┃ ┣ 📜Trade.css
 ┃ ┃ ┃ ┗ 📜TradingSimulator.css
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-5
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜Order.css
 ┃ ┃ ┃ ┣ 📜Orderbook.css
 ┃ ┃ ┃ ┣ 📜Trade.css
 ┃ ┃ ┃ ┗ 📜TradingSimulator.css
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-6
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜Order.css
 ┃ ┃ ┃ ┣ 📜Orderbook.css
 ┃ ┃ ┃ ┣ 📜Trade.css
 ┃ ┃ ┃ ┗ 📜TradingSimulator.css
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-7
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜Order.css
 ┃ ┃ ┃ ┣ 📜Orderbook.css
 ┃ ┃ ┃ ┣ 📜Trade.css
 ┃ ┃ ┃ ┗ 📜TradingSimulator.css
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-8
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜Order.css
 ┃ ┃ ┃ ┣ 📜Orderbook.css
 ┃ ┃ ┃ ┣ 📜Trade.css
 ┃ ┃ ┃ ┗ 📜TradingSimulator.css
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-9
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜Order.css
 ┃ ┃ ┃ ┣ 📜Orderbook.css
 ┃ ┃ ┃ ┣ 📜Trade.css
 ┃ ┃ ┃ ┗ 📜TradingSimulator.css
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dashboard-overview-main
 ┃ ┃ ┣ 📜ChangeLabel.jsx
 ┃ ┃ ┣ 📜ChangeLabelRecycle.jsx
 ┃ ┃ ┣ 📜EventMarkerContainer.jsx
 ┃ ┃ ┣ 📜green copy.json
 ┃ ┃ ┣ 📜green.json
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┣ 📜Pointer.jsx
 ┃ ┃ ┗ 📜Test.jsx
 ┃ ┣ 📂datepicker
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂dropdown
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂error-page
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂faq-layout-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂faq-layout-2
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂faq-layout-3
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂file-manager
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂file-upload
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂icon
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂image-zoom
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂inbox
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂invoice-layout-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂invoice-layout-2
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂loading-icon
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂login
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂modal
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂notification
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂point-of-sale
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂post
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂pricing-layout-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂pricing-layout-2
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂product-grid
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂product-list
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂profile-overview-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂profile-overview-1 copy
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂profile-overview-2
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂profile-overview-3
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂progress-bar
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂register
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂register copy
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂regular-form
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂regular-table
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂reviews
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂seller-detail
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂seller-list
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂slide-over
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂slider
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂tab
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂tabulator
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂tom-select
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂tooltip
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂transaction-detail
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂transaction-list
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂typography
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂update-profile
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂users-layout-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂users-layout-2
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂users-layout-2 copy
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂users-layout-3
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂validation
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂wizard-layout-1
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂wizard-layout-2
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂wizard-layout-3
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┗ 📂wysiwyg-editor
 ┃ ┃ ┗ 📜Main.jsx
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

