import { Low } from 'lowdb';
import { JSONFilePreset } from 'lowdb/node';

const db = await JSONFilePreset('db.json', { user: [] });

const getLatestUser = async (req, res) => {
  await db.read();
  const latestUser = db.data.user.at(-1);
  if (!latestUser) {
    return res.status(404).json({ message: 'No users found' });
  }
  res.status(200).json({ data: latestUser });
};

const storeLatestUser = async (req, res, next) => {
  const { firstname, lastname, dob } = req.body;
  console.log(firstname)
  if (!firstname || !lastname || !dob) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    await db.read();
    db.data.user.push({ firstname, lastname, dob });
    await db.write();

    const latestUser = db.data.user[db.data.user.length - 1]
    console.log(db.data.user);
    console.log(latestUser)
    return res.status(201).json({ status: 'success',data:latestUser });
  } catch (error) {

    res.status(500).json("Error while saving user data")
  }
};

export { getLatestUser, storeLatestUser };
