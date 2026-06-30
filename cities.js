const alaskaCities = [
  "Anchorage", "Auke Bay", "Barrow", "Bethel", "Big Lake",
  "Chugiak", "Copper Center", "Craig", "Delta Junction", "Douglas",
  "Eagle River", "Eielson", "Fairbanks", "Gakona", "Girdwood",
  "Glennallen", "Haines", "Healy", "Homer", "Juneau",
  "Kake", "Kasilof", "Kenai", "Ketchikan", "King Salmon",
  "Kodiak", "Kotzebue", "Nenana", "Ninilchik", "Nome",
  "North Pole", "Old Harbor", "Palmer", "Seward", "Sitka",
  "Skagway", "Sleetmute", "Soldotna", "Talkeetna", "Trapper Creek",
  "Two Rivers", "Unalakleet", "Unalaska", "Valdez", "Ward Cove",
  "Wasilla", "Willow", "Wrangell",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < alaskaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(alaskaCities[i]);
}

module.exports = { batches };
