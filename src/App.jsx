import { useState } from 'react'
import './App.css'
import Drawer from './components/Drawer'
import DrawerList from './components/DrawerList'
import DrawerItem from './components/DrawerItem'

function App() {
    const [open, setOpen] = useState(false)

    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    const routes = [
        {
            name: 'Página 1',
            path: '/'
        },
        {
            name: 'Página 2',
            path: '/page-2'
        }
    ]

    return(
        <div className='container'>
            <button className='button' onClick={openDrawer}>Abrir drawer</button>
            <Drawer isOpen={open} onClose={closeDrawer}>
                <DrawerList>
                    {routes.map((route, i) => (
                        <DrawerItem selected={window.location.pathname == route.path} href={route.path} key={i}>{route.name}</DrawerItem>
                    ))}
                </DrawerList>
            </Drawer>
        </div>
    )
}

export default App
