import React, { useState } from 'react'


const Player = ({ name, symbol, isActive }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handleEdit = () => {
        setIsEditing((prev) => !prev);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? (
                    <input type='text' value={playerName} required onChange={(e) => setPlayerName(e.target.value)} placeholder={name} />
                ) : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player