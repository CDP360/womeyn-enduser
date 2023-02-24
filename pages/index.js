
import Home from '../src/components/home/Home'
import LayoutHeader from '../src/components/Layoutheader/LayoutHeader'

export default function index({ setdark, dark}) {
  return (
    <LayoutHeader dark={dark} setdark={setdark}>
      <Home />
    </LayoutHeader>
  )
  
}

