import { SoundcraftUI } from 'soundcraft-ui-connection';

const mixerIP = "10.10.2.1";
const showName = "test2";
const snapshotName = "aarti";

const conn = new SoundcraftUI(mixerIP);

function changeShow(mixerIP, showName, snapshotName) {
    conn.connect();
    conn.shows.loadSnapshot(showName, snapshotName);
    conn.disconnect(); // close connection
}

changeShow(mixerIP,showName,snapshotName);
