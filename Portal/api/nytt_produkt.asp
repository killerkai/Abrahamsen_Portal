<%'******************************************************
Response.Charset = "ISO-8859-1"
Response.CacheControl = "no-cache"
Response.AddHeader "Pragma", "no-cache"
Response.Expires = -1

       
        produkt = Trim(Request("produkt"))
        produktgruppeid = Trim(Request("produktgruppeid"))
        produktkategoriid = Trim(Request("produktkategoriid"))                  
        
        if produkt = "" Then
            melding = "produktnameMangler"
            data = "{"
				        data = data & """Transfer"": """ & melding & """"				
		        data = data & "}"
            response.write data
        
        else if produktgruppeid = "null" Then
                melding = "gruppeidMangler"
                data = "{"
				            data = data & """Transfer"": """ & melding & """"				
		            data = data & "}"
                response.write data
        
        else if produktkategoriid = "null" Then
                    melding = "kategoriidMangler"
                    data = "{"
				                data = data & """Transfer"": """ & melding & """"				
		                data = data & "}"
                    response.write data
         Else


	        '***************************************************
	
	        Set Conn = Server.CreateObject("ADODB.Connection")
	        Conn.Open "PROVIDER=MICROSOFT.JET.OLEDB.4.0; DATA SOURCE=" & server.mappath("/db/db.mdb")
	
	        '***************************************************
                Set rsprodukt = Server.CreateObject("ADODB.Recordset")
		        strSQL = "SELECT * FROM tblProdukt" 
			
		        rsprodukt.CursorType = 2
		        rsprodukt.LockType = 3
		        rsprodukt.Open strSQL, conn
		        rsprodukt.AddNew
                rsprodukt.Fields("Produkt") = produkt
                rsprodukt.Fields("RegDato") = Date
                rsprodukt.Fields("WebStatus") = "nei"
                rsprodukt.Fields("slide") = "nei"
                rsprodukt.Fields("ProduktgruppeId") = produktgruppeid
                rsprodukt.Fields("ProduktkategoriId") = produktkategoriid                
                rsprodukt.Update
        
        melding = "ok"
       


        data = "{"
				        data = data & """Transfer"": """ & melding & """"						
				
		
		        data = data & "}"



        response.write data

        Set Conn = Nothing
        Set rsprodukt = Nothing
        End if
    End if
    End if



%>