import { SoundcraftUI } from 'soundcraft-ui-connection';
import schedule from 'node-schedule';

const mixerIP = "10.10.2.1";
const showName = "test2";
const snapshotName = "aarti";
const cronTiming = "0 3 * * *"

const conn = new SoundcraftUI(mixerIP);

function changeShow(mixerIP, showName, snapshotName) {
    conn.connect();
    conn.shows.loadSnapshot(showName, snapshotName);
    conn.disconnect(); // close connection
}

schedule.scheduleJob(cronTiming, () => { 
    changeShow(mixerIP,showName,snapshotName);
});
