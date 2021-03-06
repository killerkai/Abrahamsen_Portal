﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Portal.Models
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	using System.ComponentModel;
	using System;
	
	
	[global::System.Data.Linq.Mapping.DatabaseAttribute(Name="abdb")]
	public partial class abdbDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Extensibility Method Definitions
    partial void OnCreated();
    #endregion
		
		public abdbDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["abdbConnectionString"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public abdbDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public abdbDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public abdbDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public abdbDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public System.Data.Linq.Table<tblBruker> tblBrukers
		{
			get
			{
				return this.GetTable<tblBruker>();
			}
		}
		
		public System.Data.Linq.Table<tblProdukt> tblProdukts
		{
			get
			{
				return this.GetTable<tblProdukt>();
			}
		}
		
		public System.Data.Linq.Table<tblProduktgruppe> tblProduktgruppes
		{
			get
			{
				return this.GetTable<tblProduktgruppe>();
			}
		}
		
		public System.Data.Linq.Table<tblProduktkategori> tblProduktkategoris
		{
			get
			{
				return this.GetTable<tblProduktkategori>();
			}
		}
		
		public System.Data.Linq.Table<tblTillegg> tblTilleggs
		{
			get
			{
				return this.GetTable<tblTillegg>();
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.tblBruker")]
	public partial class tblBruker
	{
		
		private int _BrukerId;
		
		private System.Nullable<int> _BrukerTypeId;
		
		private System.Nullable<int> _FirmaId;
		
		private System.Nullable<int> _KnyttetId;
		
		private System.Nullable<System.DateTime> _RegDato;
		
		private System.Nullable<int> _Brukernr;
		
		private string _Firma;
		
		private string _Kontaktperson;
		
		private string _Fornavn;
		
		private string _Etternavn;
		
		private string _Tittel;
		
		private string _Gateadresse;
		
		private string _Postnr1;
		
		private string _Sted1;
		
		private string _Land1;
		
		private string _Postadresse;
		
		private string _Postnr2;
		
		private string _Sted2;
		
		private string _Land2;
		
		private string _Telefon;
		
		private string _Telefaks;
		
		private string _Mobil;
		
		private string _Epost;
		
		private string _Web;
		
		private string _Foretaksnummer;
		
		private string _Mva;
		
		private System.Nullable<System.DateTime> _Fodselsdato;
		
		private string _Kjonn;
		
		private string _Brukernavn;
		
		private string _Passord;
		
		private System.Nullable<decimal> _Lat;
		
		private System.Nullable<decimal> _Lng;
		
		private string _Aktiveringskode;
		
		private string _Innhold;
		
		private string _Nyhetsmail;
		
		private System.Nullable<int> _Status;
		
		private string _KundeId;
		
		public tblBruker()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_BrukerId", DbType="Int NOT NULL")]
		public int BrukerId
		{
			get
			{
				return this._BrukerId;
			}
			set
			{
				if ((this._BrukerId != value))
				{
					this._BrukerId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_BrukerTypeId", DbType="Int")]
		public System.Nullable<int> BrukerTypeId
		{
			get
			{
				return this._BrukerTypeId;
			}
			set
			{
				if ((this._BrukerTypeId != value))
				{
					this._BrukerTypeId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_FirmaId", DbType="Int")]
		public System.Nullable<int> FirmaId
		{
			get
			{
				return this._FirmaId;
			}
			set
			{
				if ((this._FirmaId != value))
				{
					this._FirmaId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_KnyttetId", DbType="Int")]
		public System.Nullable<int> KnyttetId
		{
			get
			{
				return this._KnyttetId;
			}
			set
			{
				if ((this._KnyttetId != value))
				{
					this._KnyttetId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_RegDato", DbType="DateTime")]
		public System.Nullable<System.DateTime> RegDato
		{
			get
			{
				return this._RegDato;
			}
			set
			{
				if ((this._RegDato != value))
				{
					this._RegDato = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Brukernr", DbType="Int")]
		public System.Nullable<int> Brukernr
		{
			get
			{
				return this._Brukernr;
			}
			set
			{
				if ((this._Brukernr != value))
				{
					this._Brukernr = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Firma", DbType="NVarChar(255)")]
		public string Firma
		{
			get
			{
				return this._Firma;
			}
			set
			{
				if ((this._Firma != value))
				{
					this._Firma = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Kontaktperson", DbType="NVarChar(255)")]
		public string Kontaktperson
		{
			get
			{
				return this._Kontaktperson;
			}
			set
			{
				if ((this._Kontaktperson != value))
				{
					this._Kontaktperson = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Fornavn", DbType="NVarChar(255)")]
		public string Fornavn
		{
			get
			{
				return this._Fornavn;
			}
			set
			{
				if ((this._Fornavn != value))
				{
					this._Fornavn = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Etternavn", DbType="NVarChar(255)")]
		public string Etternavn
		{
			get
			{
				return this._Etternavn;
			}
			set
			{
				if ((this._Etternavn != value))
				{
					this._Etternavn = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Tittel", DbType="NVarChar(255)")]
		public string Tittel
		{
			get
			{
				return this._Tittel;
			}
			set
			{
				if ((this._Tittel != value))
				{
					this._Tittel = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Gateadresse", DbType="NVarChar(255)")]
		public string Gateadresse
		{
			get
			{
				return this._Gateadresse;
			}
			set
			{
				if ((this._Gateadresse != value))
				{
					this._Gateadresse = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Postnr1", DbType="NVarChar(255)")]
		public string Postnr1
		{
			get
			{
				return this._Postnr1;
			}
			set
			{
				if ((this._Postnr1 != value))
				{
					this._Postnr1 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Sted1", DbType="NVarChar(255)")]
		public string Sted1
		{
			get
			{
				return this._Sted1;
			}
			set
			{
				if ((this._Sted1 != value))
				{
					this._Sted1 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Land1", DbType="NVarChar(255)")]
		public string Land1
		{
			get
			{
				return this._Land1;
			}
			set
			{
				if ((this._Land1 != value))
				{
					this._Land1 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Postadresse", DbType="NVarChar(255)")]
		public string Postadresse
		{
			get
			{
				return this._Postadresse;
			}
			set
			{
				if ((this._Postadresse != value))
				{
					this._Postadresse = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Postnr2", DbType="NVarChar(255)")]
		public string Postnr2
		{
			get
			{
				return this._Postnr2;
			}
			set
			{
				if ((this._Postnr2 != value))
				{
					this._Postnr2 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Sted2", DbType="NVarChar(255)")]
		public string Sted2
		{
			get
			{
				return this._Sted2;
			}
			set
			{
				if ((this._Sted2 != value))
				{
					this._Sted2 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Land2", DbType="NVarChar(255)")]
		public string Land2
		{
			get
			{
				return this._Land2;
			}
			set
			{
				if ((this._Land2 != value))
				{
					this._Land2 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Telefon", DbType="NVarChar(255)")]
		public string Telefon
		{
			get
			{
				return this._Telefon;
			}
			set
			{
				if ((this._Telefon != value))
				{
					this._Telefon = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Telefaks", DbType="NVarChar(255)")]
		public string Telefaks
		{
			get
			{
				return this._Telefaks;
			}
			set
			{
				if ((this._Telefaks != value))
				{
					this._Telefaks = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Mobil", DbType="NVarChar(255)")]
		public string Mobil
		{
			get
			{
				return this._Mobil;
			}
			set
			{
				if ((this._Mobil != value))
				{
					this._Mobil = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Epost", DbType="NVarChar(255)")]
		public string Epost
		{
			get
			{
				return this._Epost;
			}
			set
			{
				if ((this._Epost != value))
				{
					this._Epost = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Web", DbType="NVarChar(255)")]
		public string Web
		{
			get
			{
				return this._Web;
			}
			set
			{
				if ((this._Web != value))
				{
					this._Web = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Foretaksnummer", DbType="NVarChar(255)")]
		public string Foretaksnummer
		{
			get
			{
				return this._Foretaksnummer;
			}
			set
			{
				if ((this._Foretaksnummer != value))
				{
					this._Foretaksnummer = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Mva", DbType="NVarChar(255)")]
		public string Mva
		{
			get
			{
				return this._Mva;
			}
			set
			{
				if ((this._Mva != value))
				{
					this._Mva = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Fodselsdato", DbType="DateTime")]
		public System.Nullable<System.DateTime> Fodselsdato
		{
			get
			{
				return this._Fodselsdato;
			}
			set
			{
				if ((this._Fodselsdato != value))
				{
					this._Fodselsdato = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Kjonn", DbType="NVarChar(255)")]
		public string Kjonn
		{
			get
			{
				return this._Kjonn;
			}
			set
			{
				if ((this._Kjonn != value))
				{
					this._Kjonn = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Brukernavn", DbType="NVarChar(255)")]
		public string Brukernavn
		{
			get
			{
				return this._Brukernavn;
			}
			set
			{
				if ((this._Brukernavn != value))
				{
					this._Brukernavn = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Passord", DbType="NVarChar(255)")]
		public string Passord
		{
			get
			{
				return this._Passord;
			}
			set
			{
				if ((this._Passord != value))
				{
					this._Passord = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Lat", DbType="Decimal(28,15)")]
		public System.Nullable<decimal> Lat
		{
			get
			{
				return this._Lat;
			}
			set
			{
				if ((this._Lat != value))
				{
					this._Lat = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Lng", DbType="Decimal(28,15)")]
		public System.Nullable<decimal> Lng
		{
			get
			{
				return this._Lng;
			}
			set
			{
				if ((this._Lng != value))
				{
					this._Lng = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Aktiveringskode", DbType="NVarChar(255)")]
		public string Aktiveringskode
		{
			get
			{
				return this._Aktiveringskode;
			}
			set
			{
				if ((this._Aktiveringskode != value))
				{
					this._Aktiveringskode = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Innhold", DbType="NVarChar(MAX)")]
		public string Innhold
		{
			get
			{
				return this._Innhold;
			}
			set
			{
				if ((this._Innhold != value))
				{
					this._Innhold = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Nyhetsmail", DbType="NVarChar(255)")]
		public string Nyhetsmail
		{
			get
			{
				return this._Nyhetsmail;
			}
			set
			{
				if ((this._Nyhetsmail != value))
				{
					this._Nyhetsmail = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Status", DbType="Int")]
		public System.Nullable<int> Status
		{
			get
			{
				return this._Status;
			}
			set
			{
				if ((this._Status != value))
				{
					this._Status = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_KundeId", DbType="NVarChar(255)")]
		public string KundeId
		{
			get
			{
				return this._KundeId;
			}
			set
			{
				if ((this._KundeId != value))
				{
					this._KundeId = value;
				}
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.tblProdukt")]
	public partial class tblProdukt
	{
		
		private int _ProduktId;
		
		private System.Nullable<int> _ProduktgruppeId;
		
		private System.Nullable<int> _ProduktkategoriId;
		
		private System.Nullable<System.DateTime> _RegDato;
		
		private string _Produkt;
		
		private string _pris;
		
		private System.Nullable<int> _ProduktNr;
		
		private string _ProduktBeskrivelse;
		
		private string _Bredde;
		
		private string _Hoyde;
		
		private string _Dybde;
		
		private string _Vekt;
		
		private string _bilde1;
		
		private string _bilde2;
		
		private string _bilde3;
		
		private string _bilde4;
		
		private System.Nullable<int> _Status;
		
		private string _ButikkStatus;
		
		private string _LagerDato;
		
		private string _WebStatus;
		
		private string _slide;
		
		public tblProdukt()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktId", DbType="Int NOT NULL")]
		public int ProduktId
		{
			get
			{
				return this._ProduktId;
			}
			set
			{
				if ((this._ProduktId != value))
				{
					this._ProduktId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktgruppeId", DbType="Int")]
		public System.Nullable<int> ProduktgruppeId
		{
			get
			{
				return this._ProduktgruppeId;
			}
			set
			{
				if ((this._ProduktgruppeId != value))
				{
					this._ProduktgruppeId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktkategoriId", DbType="Int")]
		public System.Nullable<int> ProduktkategoriId
		{
			get
			{
				return this._ProduktkategoriId;
			}
			set
			{
				if ((this._ProduktkategoriId != value))
				{
					this._ProduktkategoriId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_RegDato", DbType="DateTime")]
		public System.Nullable<System.DateTime> RegDato
		{
			get
			{
				return this._RegDato;
			}
			set
			{
				if ((this._RegDato != value))
				{
					this._RegDato = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Produkt", DbType="NVarChar(255)")]
		public string Produkt
		{
			get
			{
				return this._Produkt;
			}
			set
			{
				if ((this._Produkt != value))
				{
					this._Produkt = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_pris", DbType="NVarChar(255)")]
		public string pris
		{
			get
			{
				return this._pris;
			}
			set
			{
				if ((this._pris != value))
				{
					this._pris = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktNr", DbType="Int")]
		public System.Nullable<int> ProduktNr
		{
			get
			{
				return this._ProduktNr;
			}
			set
			{
				if ((this._ProduktNr != value))
				{
					this._ProduktNr = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktBeskrivelse", DbType="NVarChar(MAX)")]
		public string ProduktBeskrivelse
		{
			get
			{
				return this._ProduktBeskrivelse;
			}
			set
			{
				if ((this._ProduktBeskrivelse != value))
				{
					this._ProduktBeskrivelse = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Bredde", DbType="NVarChar(255)")]
		public string Bredde
		{
			get
			{
				return this._Bredde;
			}
			set
			{
				if ((this._Bredde != value))
				{
					this._Bredde = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Hoyde", DbType="NVarChar(255)")]
		public string Hoyde
		{
			get
			{
				return this._Hoyde;
			}
			set
			{
				if ((this._Hoyde != value))
				{
					this._Hoyde = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Dybde", DbType="NVarChar(255)")]
		public string Dybde
		{
			get
			{
				return this._Dybde;
			}
			set
			{
				if ((this._Dybde != value))
				{
					this._Dybde = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Vekt", DbType="NVarChar(255)")]
		public string Vekt
		{
			get
			{
				return this._Vekt;
			}
			set
			{
				if ((this._Vekt != value))
				{
					this._Vekt = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_bilde1", DbType="NVarChar(255)")]
		public string bilde1
		{
			get
			{
				return this._bilde1;
			}
			set
			{
				if ((this._bilde1 != value))
				{
					this._bilde1 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_bilde2", DbType="NVarChar(255)")]
		public string bilde2
		{
			get
			{
				return this._bilde2;
			}
			set
			{
				if ((this._bilde2 != value))
				{
					this._bilde2 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_bilde3", DbType="NVarChar(255)")]
		public string bilde3
		{
			get
			{
				return this._bilde3;
			}
			set
			{
				if ((this._bilde3 != value))
				{
					this._bilde3 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_bilde4", DbType="NVarChar(255)")]
		public string bilde4
		{
			get
			{
				return this._bilde4;
			}
			set
			{
				if ((this._bilde4 != value))
				{
					this._bilde4 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Status", DbType="Int")]
		public System.Nullable<int> Status
		{
			get
			{
				return this._Status;
			}
			set
			{
				if ((this._Status != value))
				{
					this._Status = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ButikkStatus", DbType="NVarChar(255)")]
		public string ButikkStatus
		{
			get
			{
				return this._ButikkStatus;
			}
			set
			{
				if ((this._ButikkStatus != value))
				{
					this._ButikkStatus = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_LagerDato", DbType="NVarChar(255)")]
		public string LagerDato
		{
			get
			{
				return this._LagerDato;
			}
			set
			{
				if ((this._LagerDato != value))
				{
					this._LagerDato = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_WebStatus", DbType="NVarChar(255)")]
		public string WebStatus
		{
			get
			{
				return this._WebStatus;
			}
			set
			{
				if ((this._WebStatus != value))
				{
					this._WebStatus = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_slide", DbType="NVarChar(255)")]
		public string slide
		{
			get
			{
				return this._slide;
			}
			set
			{
				if ((this._slide != value))
				{
					this._slide = value;
				}
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.tblProduktgruppe")]
	public partial class tblProduktgruppe
	{
		
		private int _ProduktgruppeId;
		
		private System.Nullable<int> _ProduktgruppeNr;
		
		private string _Produktgruppe;
		
		private string _ProduktgruppeInfo;
		
		private System.Nullable<int> _Status;
		
		public tblProduktgruppe()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktgruppeId", DbType="Int NOT NULL")]
		public int ProduktgruppeId
		{
			get
			{
				return this._ProduktgruppeId;
			}
			set
			{
				if ((this._ProduktgruppeId != value))
				{
					this._ProduktgruppeId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktgruppeNr", DbType="Int")]
		public System.Nullable<int> ProduktgruppeNr
		{
			get
			{
				return this._ProduktgruppeNr;
			}
			set
			{
				if ((this._ProduktgruppeNr != value))
				{
					this._ProduktgruppeNr = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Produktgruppe", DbType="NVarChar(255)")]
		public string Produktgruppe
		{
			get
			{
				return this._Produktgruppe;
			}
			set
			{
				if ((this._Produktgruppe != value))
				{
					this._Produktgruppe = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktgruppeInfo", DbType="NVarChar(255)")]
		public string ProduktgruppeInfo
		{
			get
			{
				return this._ProduktgruppeInfo;
			}
			set
			{
				if ((this._ProduktgruppeInfo != value))
				{
					this._ProduktgruppeInfo = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Status", DbType="Int")]
		public System.Nullable<int> Status
		{
			get
			{
				return this._Status;
			}
			set
			{
				if ((this._Status != value))
				{
					this._Status = value;
				}
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.tblProduktkategori")]
	public partial class tblProduktkategori
	{
		
		private int _ProduktkategoriId;
		
		private System.Nullable<int> _ProduktkategoriNr;
		
		private string _Produktkategori;
		
		private System.Nullable<int> _Status;
		
		public tblProduktkategori()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktkategoriId", DbType="Int NOT NULL")]
		public int ProduktkategoriId
		{
			get
			{
				return this._ProduktkategoriId;
			}
			set
			{
				if ((this._ProduktkategoriId != value))
				{
					this._ProduktkategoriId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProduktkategoriNr", DbType="Int")]
		public System.Nullable<int> ProduktkategoriNr
		{
			get
			{
				return this._ProduktkategoriNr;
			}
			set
			{
				if ((this._ProduktkategoriNr != value))
				{
					this._ProduktkategoriNr = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Produktkategori", DbType="NVarChar(255)")]
		public string Produktkategori
		{
			get
			{
				return this._Produktkategori;
			}
			set
			{
				if ((this._Produktkategori != value))
				{
					this._Produktkategori = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Status", DbType="Int")]
		public System.Nullable<int> Status
		{
			get
			{
				return this._Status;
			}
			set
			{
				if ((this._Status != value))
				{
					this._Status = value;
				}
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.tblTillegg")]
	public partial class tblTillegg
	{
		
		private int _TilleggId;
		
		private System.Nullable<int> _KnyttetId;
		
		private string _TilleggType;
		
		private string _TilleggGruppe;
		
		private string _TilleggTekst;
		
		private System.Nullable<int> _TilleggTall;
		
		private string _TilleggMerknad;
		
		public tblTillegg()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TilleggId", DbType="Int NOT NULL")]
		public int TilleggId
		{
			get
			{
				return this._TilleggId;
			}
			set
			{
				if ((this._TilleggId != value))
				{
					this._TilleggId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_KnyttetId", DbType="Int")]
		public System.Nullable<int> KnyttetId
		{
			get
			{
				return this._KnyttetId;
			}
			set
			{
				if ((this._KnyttetId != value))
				{
					this._KnyttetId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TilleggType", DbType="NVarChar(255)")]
		public string TilleggType
		{
			get
			{
				return this._TilleggType;
			}
			set
			{
				if ((this._TilleggType != value))
				{
					this._TilleggType = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TilleggGruppe", DbType="NVarChar(255)")]
		public string TilleggGruppe
		{
			get
			{
				return this._TilleggGruppe;
			}
			set
			{
				if ((this._TilleggGruppe != value))
				{
					this._TilleggGruppe = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TilleggTekst", DbType="NVarChar(255)")]
		public string TilleggTekst
		{
			get
			{
				return this._TilleggTekst;
			}
			set
			{
				if ((this._TilleggTekst != value))
				{
					this._TilleggTekst = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TilleggTall", DbType="Int")]
		public System.Nullable<int> TilleggTall
		{
			get
			{
				return this._TilleggTall;
			}
			set
			{
				if ((this._TilleggTall != value))
				{
					this._TilleggTall = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TilleggMerknad", DbType="NVarChar(MAX)")]
		public string TilleggMerknad
		{
			get
			{
				return this._TilleggMerknad;
			}
			set
			{
				if ((this._TilleggMerknad != value))
				{
					this._TilleggMerknad = value;
				}
			}
		}
	}
}
#pragma warning restore 1591
