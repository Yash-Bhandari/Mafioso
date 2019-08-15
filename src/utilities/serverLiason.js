import { resolve } from "dns";

export default function ServerLiason(backend, gameCode){
    this.backend = backend;
    this.gameCode = gameCode;

    this.getPlayersAndRoles = async () => {
        let response = await fetch(backend + gameCode);
        let playersAndRoles = await response.json();
        return playersAndRoles;
    }

    this.getRoleList = async(id) => {
        return fetch(backend + gameCode + '/' + id)
            .then(response => response.json())
    }

    this.joinGame = async (playerName) => {
        return fetch(backend + "join/" + gameCode + '?playerName=' + playerName, {method: 'POST'})
            .then(response => response.headers)
            .then(headers => ({
                role: headers.get('role'),
                id: headers.get('id'),
            }));
    }

    this.killPlayer = async(playerName, hostID) => {
        fetch(backend + gameCode + '/' + hostID + '?playerName=' + playerName, {method: 'PUT'});
    }
}