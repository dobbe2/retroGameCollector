import React from 'react';
import './styles.css';
import Table from 'react-bootstrap/Table';
import mario3 from "../../assets/smb3.jpg";
import dkc from "../../assets/dkc.jpg";
import tetris from '../../assets/tetris.jpg';

export default function GameList() {
    return(
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>System</th>
                    <th>Notes?</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <img src={mario3} className="gameImage" />
                    </td>
                    <td>Super Mario Bros. 3</td>
                    <td>NES</td>
                    <td>In Box, 2 copies</td>
                </tr>
                <tr>
                    <td>
                        <img src={dkc} className='gameImage' />
                    </td>
                    <td>Donkey Kong Country</td>
                    <td>SNES</td>
                    <td>Some Scratches on Label</td>
                </tr>
                <tr>
                    <td>
                        <img src={tetris} className='gameImage' />
                    </td>
                    <td>Tetris</td>
                    <td>NES</td>
                    <td>Average</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
