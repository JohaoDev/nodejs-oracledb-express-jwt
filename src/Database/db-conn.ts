import oracledb from "oracledb";

export async function initDB() {
  try {
    // Create a connection pool which will later be accessed via the
    // pool cache as the 'default' pool.
    await oracledb.createPool({
      user: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASS,
      connectString: "localhost/XE",
    });
    console.log("Connection pool started");

    // Now the pool is running, it can be used
    // await dostuff();
  } catch (err) {
    console.error("initDB() error: " + err.message);
  }
  // finally {
  //   await closePoolAndExit();
  // }
}

export async function closePoolAndExit() {
  console.log("\nTerminating");
  try {
    // Get the pool from the pool cache and close it when no
    // connections are in use, or force it closed after 10 seconds.
    // If this hangs, you may need DISABLE_OOB=ON in a sqlnet.ora file.
    // This setting should not be needed if both Oracle Client and Oracle
    // Database are 19c (or later).
    await oracledb.getPool().close(10);
    console.log("Pool closed");
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

process.once("SIGTERM", closePoolAndExit).once("SIGINT", closePoolAndExit);
