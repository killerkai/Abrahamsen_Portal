
namespace Portal.Models
{
    
    using System.Data.SqlClient;
    using System.Configuration;
    using System.Data;


    public class Functionlib
    {
        public abdbDataContext db;
        public string _ConnString;
        public SqlConnection _Connection;


        public Functionlib(string _ConnectionId)
        {
            _ConnString = ConfigurationManager.ConnectionStrings[_ConnectionId].ConnectionString;
            db = new abdbDataContext(_ConnString);
        }

        public SqlConnection getConnection()
        {
            if (_Connection == null)
            {
                _Connection = new SqlConnection(_ConnString);
            }
            if (!(_Connection.State == ConnectionState.Open))
            {
                _Connection.Open();
            }
            return _Connection;
        }        
    }
}
