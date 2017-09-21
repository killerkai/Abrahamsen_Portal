<%'******************************************************
Response.Charset = "ISO-8859-1"
Response.CacheControl = "no-cache"
Response.AddHeader "Pragma", "no-cache"
Response.Expires = -1



brukernavn = Trim(Request("brukernavn"))
passord = Trim(Request("passord"))
    
If brukernavn = "" OR passord = "" Then

	melding = "feil"
	data = "{"
				data = data & """Transfer"": """ & melding & """"
		
	data = data & "}"


Else

	'***************************************************
	
	Set Conn = Server.CreateObject("ADODB.Connection")
	Conn.Open "PROVIDER=MICROSOFT.JET.OLEDB.4.0; DATA SOURCE=" & server.mappath("/db/db.mdb")
	
	'***************************************************
	Set rsBruker = Server.CreateObject("ADODB.Recordset")
	strSQL = "SELECT * FROM tblBruker WHERE Brukernavn = '" & brukernavn & "' AND Passord = '" & passord & "' AND Status = 1"
	
	rsBruker.CursorType = 0
	rsBruker.LockType = 1
	rsBruker.CursorLocation = 3
	rsBruker.Open strSQL, conn
	
	If rsBruker.EOF Then

		conn.Close
		Set conn = Nothing
		Set rsBruker = Nothing
			
		melding = "feilbrukerpass"
		data = "{"
				data = data & """Transfer"": """ & melding & """"			
		
		data = data & "}"		
	ElseIf NOT rsBruker.EOF Then
	
		melding = "ok"
		
		data = "{"
				data = data & """Transfer"": """ & melding & ""","
				data = data & """brukerid"": """ & rsBruker.Fields("Brukerid") & ""","				
				data = data & """fornavn"": """ & rsBruker.Fields("Fornavn") & ""","
				data = data & """etternavn"": """ & rsBruker.Fields("Etternavn") & ""","
				data = data & """brukertype"": """ & rsBruker.Fields("BrukerTypeid") & ""","                
				data = data & """status"": """ & rsBruker.Fields("Status") & """"						
				
		
		data = data & "}"
	End if	
End if

response.write data

Set Conn = Nothing
Set rsBruker = Nothing	

%>
	
