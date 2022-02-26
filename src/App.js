import text from './Text.json';

const wordsCount = text.text.reduce((prev, curr) => prev + curr.split(' ').length, 0);

const Paragraph = ({text}) => (
  <p className="py-2 my-0 px-2 bg-light">{
    text.split(' ').map(e => <span>{e + ' '}</span>)
  }
  </p>
);

const App = () => (
  <div className="bg-light py-5 px-2">
    <div className="mw-100 mx-auto" style={{width: '700px'}}>
      <h1 className="text-center mt-4 mb-3">Performance</h1>
      {
        text.text.map(paragraph => <Paragraph text={paragraph} />)
      }
      <hr />
      <div className="d-flex justify-content-between">
        <span>By Estid Felipe Lozano Reyes</span>
        <span>Words Count: {wordsCount}</span>
      </div>
    </div>
    <img className="position-fixed top-50 mx-5 d-sm-none d-lg-block start-0" src="pencil.png" width="50" />
    <img className="position-fixed top-50 mx-5 d-sm-none d-lg-block end-0" src="pencil.png" width="50" />
  </div>
);

export default App;
