import React from 'react'
import Coinstable from './Coinstable'
import SearchCoins from './SearchCoins'


const Dashboard = () => {
    return (
        <div style={{ 'display': 'flex', 'justifyContent': 'center','flexDirection':'column' }}>
            <SearchCoins />
            <Coinstable />
        </div>
    )
}

export default Dashboard