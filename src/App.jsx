import { useState } from 'react'
import './App.css'
import Drawer from './components/Drawer'
import DrawerList from './components/DrawerList'
import DrawerItem from './components/DrawerItem'

function App() {
    const [open, setOpen] = useState(false)

    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    return(
        <div className='container'>
            <button className='button' onClick={openDrawer}>Abrir drawer</button>
            <Drawer isOpen={open} onClose={closeDrawer}>
                <DrawerList>
                    <DrawerItem>Página 1</DrawerItem>
                    <DrawerItem>Página 2</DrawerItem>
                </DrawerList>
            </Drawer>
        </div>
    )
}

export default App
