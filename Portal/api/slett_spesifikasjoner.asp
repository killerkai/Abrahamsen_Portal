<%'******************************************************
Response.Charset = "ISO-8859-1"
Response.CacheControl = "no-cache"
Response.AddHeader "Pragma", "no-cache"
Response.Expires = -1


	tilleggid = Trim(Request("tilleggid"))    
    '***************************************************
    Set Conn = Server.CreateObject("ADODB.Connection")
	Conn.Open "PROVIDER=MICROSOFT.JET.OLEDB.4.0; DATA SOURCE=" & server.mappath("/db/db.mdb")
    '***************************************************
    Set rsslett = Server.CreateObject("ADODB.Recordset")
	strSQL = "SELECT * FROM tblTillegg WHERE tilleggId =" & tilleggid 
		
	rsslett.CursorType = 2
	rsslett.LockType = 3
	rsslett.Open strSQL, conn
	
	rsslett.Delete
	rsslett.Update
	
	Conn.Close
	Set Conn = Nothing
	Set rsslett = Nothing
			
	'***************************************************************************************
	melding = "slettok"
	
	data = "{"
		data = data & """Transfer"": """ & melding & ""","		
		data = data & """Updated"": """ & now & """"		
		

data = data & "}"

response.write data
	
%>
	
