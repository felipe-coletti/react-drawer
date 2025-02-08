import { useState } from 'react'
import './App.css'
import { Drawer } from './components/Drawer'

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
            <Drawer.Root isOpen={open} onClose={closeDrawer}>
                <Drawer.List>
                    {routes.map((route, i) => (
                        <Drawer.Item selected={window.location.pathname == route.path} href={route.path} key={i}>{route.name}</Drawer.Item>
                    ))}
                </Drawer.List>
            </Drawer.Root>
        </div>
    )
}

export default App
