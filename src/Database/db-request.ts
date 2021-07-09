import oracledb from "oracledb";

export async function selectAll(tableName: string) {
  let connection: any;

  try {
    // Get a connection from the default pool
    connection = await oracledb.getConnection();
    const sql = `SELECT * FROM ${tableName}`;
    const binds: any = [];
    const options = { outFormat: oracledb.OUT_FORMAT_OBJECT };
    const result = await connection.execute(sql, binds, options);
    return result;
    // oracledb.getPool().logStatistics(); // show pool statistics.  pool.enableStatistics must be true
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        // Put the connection back in the pool
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

export async function selectByID(tableName: string, id: number) {
  let connection: any;

  try {
    // Get a connection from the default pool
    connection = await oracledb.getConnection();
    const sql = `SELECT * FROM ${tableName} where docu_sec = :id`;
    const binds: any = [id];
    const options = { outFormat: oracledb.OUT_FORMAT_OBJECT };
    const result = await connection.execute(sql, binds, options);
    return result;
    // oracledb.getPool().logStatistics(); // show pool statistics.  pool.enableStatistics must be true
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        // Put the connection back in the pool
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
