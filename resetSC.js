import { SoundcraftUI } from 'soundcraft-ui-connection';

const mixerIP = "10.119.20.15";
const showName = "test";
const snapshotName = "snapTest";

const conn = new SoundcraftUI(mixerIP);

conn.connect();
conn.shows.loadSnapshot(showName, snapshotName);
conn.disconnect(); // close connection
