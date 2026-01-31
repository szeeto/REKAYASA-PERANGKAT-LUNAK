import './App.css'
import { TypeAnimation } from 'react-type-animation'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '25%' }}>
      <TypeAnimation
        sequence={[
          'Selamat Datang Di',
          500,
          'Rekayasa Perangkat Lunak',
          500,
          'SMK NEGERI 1 BUKIT SUNDI',
          500,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '40px', display: 'inline-block', color: 'red' }}
      />
    </div>
  )
}

export default App
