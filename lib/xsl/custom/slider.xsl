<?xml version="1.0" encoding="UTF-8"?>
<!--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

-->
<!--  
    Author: Alex Humar
    Author: Jose Schulz 
-->    

<xsl:stylesheet xmlns:i18n="http://apache.org/cocoon/i18n/2.1"
	xmlns:dri="http://di.tamu.edu/DRI/1.0/"
	xmlns:mets="http://www.loc.gov/METS/"
	xmlns:xlink="http://www.w3.org/TR/xlink/"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
	xmlns:dim="http://www.dspace.org/xmlns/dspace/dim"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:mods="http://www.loc.gov/mods/v3"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns="http://www.w3.org/1999/xhtml"
	exclude-result-prefixes="i18n dri mets xlink xsl dim xhtml mods dc">

   
    <xsl:output indent="yes"/>   

    <!-- Slider template -->
    <xsl:template name="sliderTemplate">
        <xsl:if test="$request-uri = ''">
	    <div id="banner_cointainer">
                <div id="slideshow">
		    <ul class="slides">
	    	       <!-- <li><img src="themes/Linti/lib/images/slider/1.jpg" width="781" height="320" alt="Facultad de informatica - UNLP" /></li>-->
			<li><img src="themes/Linti/lib/images/slider/2.jpg" width="781" height="320" alt="Facultad de informatica - UNLP" /></li>
			<li><img src="themes/Linti/lib/images/slider/3.jpg" width="781" height="320" alt="Facultad de informatica - UNLP" /></li>
			<li><img src="themes/Linti/lib/images/slider/4.jpg" width="781" height="320" alt="Facultad de informatica - UNLP" /></li>
	            </ul>
			<span class="arrow next">&#160;<!--entidad espacio--></span>
			<span class="arrow previous">&#160;<!--entidad espacio--></span>
		</div>
            </div>
	</xsl:if>
    </xsl:template> 

</xsl:stylesheet>
