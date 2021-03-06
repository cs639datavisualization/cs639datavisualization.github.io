import Card from 'react-bootstrap/Card';
import "./video-react.css";
import { CardImg, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Player } from 'video-react';
function App() {
  var dict = new Object();
  var dict = {
    "BRECHT, ISAAC": "https://gdurl.com/ChOF",
    "CANTRELL, JACOB": "https://gdurl.com/i6U1",
    "Chan, Avery": "https://gdurl.com/rQMr",
    "CHAWLA, PARANJAY": "https://gdurl.com/XCg6",
    "CHEN, STEVEN": "https://gdurl.com/p_mi",
    "CHEN, WENQI": "https://gdurl.com/a2Ym",
    "DARLING, COLE": "https://gdurl.com/1NTZ",
    "DAY, PATRICK": "https://gdurl.com/yq18",
    "DU, JEFFREY": "https://gdurl.com/qNBQ",
    "Falck, Brett": "https://gdurl.com/H6mK2",
    "Fenley, Jake": "https://gdurl.com/5ulf",
    "FISCHER, JAMES": "https://gdurl.com/ocPR",
    "FLINT, CONNOR": "https://gdurl.com/CFKD",
    "FRANKS, LILY": "https://gdurl.com/gxYH",
    "GREWAL, ABHISHEK": "https://gdurl.com/hkqz",
    "GUPTA, SAMIKA": "https://gdurl.com/kg82",
    "He, Joey": "https://gdurl.com/Wpjs",
    "JOSHI, MUDIT": "https://gdurl.com/BhDo",
    "KENNEDY, PETER": "https://gdurl.com/0ilx",
    "LAMPING, MIKAYLA": "https://gdurl.com/NBEDr",
    "LEE, HUAN YOEI": "https://gdurl.com/I_oJ",
    "LIANG, SHANCHAO": "https://gdurl.com/ohPQ",
    "LIN, YUCHENG": "https://gdurl.com/VeBU",
    "LIU, ZILIN": "https://gdurl.com/KwYE",
    "LOCHNER, LUKE": "https://gdurl.com/xA9F",
    "LOUGHRAN, PATRICK": "https://gdurl.com/JBOt",
    "LYMAN, MAXWELL": "https://gdurl.com/phJQ",
    "Macdonald, Aaron": "https://gdurl.com/Spyh",
    "MOHAPATRA, ANUPRAS": "https://gdurl.com/zltD",
    "NARAYANAN, HARSHITA": "https://gdurl.com/3byh",
    "O'BRIEN, LOGAN": "",
    "PETERSON, SAMUEL": "https://gdurl.com/kWpo",
    "PHADNIS, SHARADA": "https://gdurl.com/AeEm",
    "PRASAD, RITWIK": "https://gdurl.com/Oo_J",
    "RAHMAN, SAFWAT": "https://gdurl.com/REjr",
    "REIMER, LYDIA": "https://gdurl.com/YMl5",
    "RYAN, DAVID": "https://gdurl.com/CTVJ",
    "Sawar, Taha": "https://gdurl.com/C0Mu",
    "Shah, Kashin": "https://gdurl.com/iPfK",
    "SRINIVASAN, SHRUTHI": "https://gdurl.com/8Qqs",
    "Sukcharoenyingyong, Oat": "",
    "SWANSON, PARKER": "https://gdurl.com/N3N9",
    "Tu, Andrew": "https://gdurl.com/hYOB",
    "Tummala, Harshit": "",
    "WANG, FRANKLIN": "https://gdurl.com/qMIQ",
    "WANG, PETER": "https://gdurl.com/p91g",
    "WON, Annie": "https://gdurl.com/8npN",
    "Yang, Shengwen": "https://gdurl.com/AkS1",
    "Yuu, John": "https://gdurl.com/jeTg",
    "Zhou, Eric": "https://gdurl.com/cCRjl",
  };
  var images = new Object();
  var images = {
    "BRECHT, ISAAC": "https://drive.google.com/uc?id=17vH8_ErfCTYMxWQa1k0L1QI-pPI_r-bw",
    "CANTRELL, JACOB": "https://drive.google.com/uc?id=1RCC9L-h2_qruUMnsMqZQ09iCJJC8vLot",
    "Chan, Avery": "https://drive.google.com/uc?id=1AFYDbH9LYRJvnGwhYd9QusUtpPJ2mtx8",
    "CHAWLA, PARANJAY": "https://drive.google.com/uc?id=1wKpguOppDSGl1dLsRf6RJrTLZVF1EfhV",
    "CHEN, STEVEN": "https://drive.google.com/uc?id=1vsis7kNJH4Hlz-bp8CXbEPO5wdwo2Ep0",
    "CHEN, WENQI": "https://drive.google.com/uc?id=1xXZvhBWHdgtpUOvgeNrhh635xYaOWmfg",
    "DARLING, COLE": "https://drive.google.com/uc?id=1tqoQD8-IgGhS6ezVTk_PNCyQnZuuBgJu",
    "DAY, PATRICK": "https://drive.google.com/uc?id=1yezn6oNOeb1QankyY970A-a8X4d81WnK",
    "DU, JEFFREY": "https://drive.google.com/uc?id=1HsG5c5bNpv_COEfV2lsmNrHGA94Xvbau",
    "Falck, Brett": "https://drive.google.com/uc?id=1ZQVUghL7BKocNoWLajAtP_x20dfrrBVg",
    "Fenley, Jake": "https://drive.google.com/uc?id=1LAzLTGnmJTUBJeoIt7oYZ9nS-MpZaJXU",
    "FISCHER, JAMES": "https://drive.google.com/uc?id=1VOL-YhaJFLbVA2S2AOGOn_q2kJlnqML3",
    "FLINT, CONNOR": "https://drive.google.com/uc?id=1bYLSsIdFaRAzo3c8eC1c2c-hlrp4-Lrv",
    "FRANKS, LILY": "https://drive.google.com/uc?id=1XE2XMXR3H38IFA6QauoNbP5tbVOQ8NoN",
    "GREWAL, ABHISHEK": "https://drive.google.com/uc?id=1mVM5s2njO7SR1o6whOHOQ3PrImL4tnXs",
    "GUPTA, SAMIKA": "https://drive.google.com/uc?id=1g2q8EhC7rIZjv5a6nHPSVnCSPwzExkvo",
    "He, Joey": "https://drive.google.com/uc?id=13-uwyNaWnOX0yYXwizg-qHzpdfbLI2b5",
    "JOSHI, MUDIT": "https://drive.google.com/uc?id=1yQMWblS--P4lt0znl7Ow5FFoa9WQyWC-",
    "KENNEDY, PETER": "https://drive.google.com/uc?id=18T3AVrq1RI5XcfJpqr5T2Lc8rLN_gGjc",
    "LAMPING, MIKAYLA": "https://drive.google.com/uc?id=1qiW6pwyYij6N8uVhPIU-cBe5zgpx-fxH",
    "LEE, HUAN YOEI": "https://drive.google.com/uc?id=1sW6hH9Ppfu3ljbZxnuBm_jhGcsz3vUyw",
    "LIANG, SHANCHAO": "https://drive.google.com/uc?id=1ieVfRFU6CkIM1LPtH6rV2DB-vnGSPOfd",
    "LIN, YUCHENG": "https://drive.google.com/uc?id=1m6qTj8gkMB9pRQKFo1gy3Oz5hhbBdUTo",
    "LIU, ZILIN": "https://drive.google.com/uc?id=1yNXxtcJO8EItlHlG1rc8pFftgMfyi8UN",
    "LOCHNER, LUKE": "https://drive.google.com/uc?id=1-WAv_Z1fnDCcHXWXgjDunDryJXHeAv99",
    "LOUGHRAN, PATRICK": "https://drive.google.com/uc?id=1pRrk1y2ZvClruTGRZVD3qfCYMd84G6cA",
    "LYMAN, MAXWELL": "https://drive.google.com/uc?id=1fhhP2djNCWce2ygxfrHSvDYhpFphoRXD",
    "Macdonald, Aaron": "https://drive.google.com/uc?id=1_rWYWdf4jVkqoQ2JyAfxLD1VGMo6YiyG",
    "MOHAPATRA, ANUPRAS": "https://drive.google.com/uc?id=1BEY32hBkmnpJ3LlA3Kd_qX3PuosoDCz2",
    "NARAYANAN, HARSHITA": "https://drive.google.com/uc?id=1bJOKTBPUznH0Y5q-gZr7GPACxVAemXgp",
    "O'BRIEN, LOGAN": "https://drive.google.com/uc?id=1X_IuNqUyHRAdMhLvnCNNVldbpvwAKRvd",
    "PETERSON, SAMUEL": "https://drive.google.com/uc?id=1A3dedXMD5RLf78uYOh0gzByeLTIemfaj",
    "PHADNIS, SHARADA": "https://drive.google.com/uc?id=1Fahmmp2WsEvjMagTAVREI81KX9Wkf4dH",
    "PRASAD, RITWIK": "https://drive.google.com/uc?id=11Z3HkEut_kDvy7NcjM0Sz_o5yE7eFq_-",
    "RAHMAN, SAFWAT": "https://drive.google.com/uc?id=13bwg78AilsDo1Hs4WC23VHsnYOhAxn0a",
    "REIMER, LYDIA": "https://drive.google.com/uc?id=18b-kGXUddlE9prU1QLyavyZQ2LB_a9_Y",
    "RYAN, DAVID": "https://drive.google.com/uc?id=1orxDZxncdP9a0fmBZop1QAQFXiFFPoOn",
    "Sawar, Taha": "https://drive.google.com/uc?id=1psjaUybV2P3w8CU3eiDytvIBWUDNCs1Z",
    "Shah, Kashin": "https://drive.google.com/uc?id=1mqTCgHk5hN6IMBrpvPpQpIbESJQjikNo",
    "SRINIVASAN, SHRUTHI": "https://drive.google.com/uc?id=1McDRPyDU96Sefsamazkwd-7shRH7kT9d",
    "Sukcharoenyingyong, Oat": "",
    "SWANSON, PARKER": "https://drive.google.com/uc?id=1R0O3pog1dajvRANZBea7LWkjXOebkWzm",
    "Tu, Andrew": "https://drive.google.com/uc?id=1Op-YcDQ4c7OG1Lr7smBJBD5h5TGn7kpO",
    "Tummala, Harshit": "",
    "WANG, FRANKLIN": "https://drive.google.com/uc?id=1ceGCfLGpmgwBOuAGnc9ICYUFO99tcb8M",
    "WANG, PETER": "https://drive.google.com/uc?id=1LeMvWrrvhb0aCJf7rq_VSWiSUmBfLnpv",
    "WON, Annie": "https://drive.google.com/uc?id=1D6yCbRIlJFf-DlNMVkHg2VP60M9h0GOF",
    "Yang, Shengwen": "https://drive.google.com/uc?id=1EYW-myCZ17zp0fe9uFnabDT3aMn-7-zn",
    "Yuu, John": "https://drive.google.com/uc?id=1rwE2aFXR1Mk_uUxZDeCTqJj9v88YmV_1",
    "Zhou, Eric": "https://drive.google.com/uc?id=1BBePK5OWW62Zd4fc-pITdwook_QNMn0w",
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>CS 639 Data Visualization Class Personal Visualization</h3>
        <Container>
          <Row xs={1} md={2} className="g-4">
            {[
              "BRECHT, ISAAC","CANTRELL, JACOB","Chan, Avery","CHAWLA, PARANJAY","CHEN, STEVEN","CHEN, WENQI","DARLING, COLE","DAY, PATRICK","DU, JEFFREY","Falck, Brett","Fenley, Jake","FISCHER, JAMES","FLINT, CONNOR","FRANKS, LILY","GREWAL, ABHISHEK","GUPTA, SAMIKA","He, Joey","JOSHI, MUDIT","KENNEDY, PETER","LAMPING, MIKAYLA","LEE, HUAN YOEI","LIANG, SHANCHAO","LIN, YUCHENG","LIU, ZILIN","LOCHNER, LUKE","LOUGHRAN, PATRICK","LYMAN, MAXWELL","Macdonald, Aaron","MOHAPATRA, ANUPRAS","NARAYANAN, HARSHITA","O'BRIEN, LOGAN","PETERSON, SAMUEL","PHADNIS, SHARADA","PRASAD, RITWIK","RAHMAN, SAFWAT","REIMER, LYDIA","RYAN, DAVID","Sawar, Taha","Shah, Kashin","SRINIVASAN, SHRUTHI","Sukcharoenyingyong, Oat","SWANSON, PARKER","Tu, Andrew","Tummala, Harshit","WANG, FRANKLIN","WANG, PETER","WON, Annie","Yang, Shengwen","Yuu, John","Zhou, Eric",
            ].map((variant, idx) => (
              <Col md={4}>
                  <Card style={{marginBottom: '1.5rem'}}>
                  <Card.Title style={{marginTop: '1rem'}}>{variant}</Card.Title>
                  <Card.Body>
                  <Player
                    playsInline
                    poster="/assets/poster.png"
                    src= {dict[variant]}
                  />
                  <Card.Img src={images[variant]} style={{marginTop: '1rem'}}/>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
