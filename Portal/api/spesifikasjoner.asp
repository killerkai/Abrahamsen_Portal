<%'******************************************************
Response.Charset = "ISO-8859-1"
Response.CacheControl = "no-cache"
Response.AddHeader "Pragma", "no-cache"
Response.Expires = -1

knytteid = Trim(Request("knytteid"))
newspesname = Trim(Request("newspesname"))
newspesval = Trim(Request("newspesval"))
tilleggtype = "produkt"
if newspesname = "" Then
    melding = "spesnameMangler"
    data = "{"
				data = data & """Transfer"": """ & melding & """"						
				
		
		data = data & "}"
    response.write data
Else


	'***************************************************
	
	Set Conn = Server.CreateObject("ADODB.Connection")
	Conn.Open "PROVIDER=MICROSOFT.JET.OLEDB.4.0; DATA SOURCE=" & server.mappath("/db/db.mdb")
	
	'***************************************************
        Set rsspes = Server.CreateObject("ADODB.Recordset")
		strSQL = "SELECT * FROM tblTillegg" 
			
		rsspes.CursorType = 2
		rsspes.LockType = 3
		rsspes.Open strSQL, conn
		rsspes.AddNew
        rsspes.Fields("KnyttetId") = knytteid
        rsspes.Fields("TilleggGruppe") = newspesname
        rsspes.Fields("TilleggTekst") = newspesval
        rsspes.Fields("TilleggType") = tilleggtype
        rsspes.Update
        
melding = "ok"
       


data = "{"
				data = data & """Transfer"": """ & melding & """"						
				
		
		data = data & "}"



response.write data

Set Conn = Nothing
Set rsspes = Nothing
End if

%>