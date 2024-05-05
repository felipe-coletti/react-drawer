import { useState } from 'react'
import './App.css'
import Drawer from './components/Drawer'

function App() {
    const [open, setOpen] = useState(false)

    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    return(
        <div className='container'>
            <button className='button' onClick={openDrawer}>Abrir drawer</button>
            <Drawer isOpen={open} onClose={closeDrawer}>
                <ul className='drawerList'>
                    <li className='item'><a className='link'>Página 1</a></li>
                    <li className='item'><a className='link'>Página 2</a></li>
                </ul>
            </Drawer>
        </div>
    )
}

export default App
