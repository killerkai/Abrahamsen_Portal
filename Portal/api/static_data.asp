<%'******************************************************
Response.Charset = "ISO-8859-1"
Response.CacheControl = "no-cache"
Response.AddHeader "Pragma", "no-cache"
Response.Expires = -1

    antallProdukter = 0

	'***************************************************
	
	Set Conn = Server.CreateObject("ADODB.Connection")
	Conn.Open "PROVIDER=MICROSOFT.JET.OLEDB.4.0; DATA SOURCE=" & server.mappath("/db/db.mdb")
	
	'***************************************************
	Set rsprodukter = Server.CreateObject("ADODB.Recordset")    
	strSQL = "SELECT * FROM tblProdukt" 	
	
	rsprodukter.CursorType = 2
	rsprodukter.LockType = 3
	rsprodukter.Open strSQL, conn
	
	Do While NOT rsprodukter.EOF
	
    antallProdukter = antallProdukter +1

    rsprodukter.MoveNext
	Loop

conn.Close
Set conn = Nothing
Set rsprodukter = Nothing

        data = "{"
		data = data & """antallProdukter"": """ & antallProdukter & """"				
		data = data & "}"
                    
    response.write data
%>
	
