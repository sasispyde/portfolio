   .col-4{
	text-align: center;
	vertical-align: middle;
}


.container{
	margin-top: 10px;
}

.row{
	height: 90vh;
}

@media screen and (min-width: 425px) {
  h3{
		text-align: center;
		font-size: 19px;
		margin-left: 5px;
   }
   .cl{
		text-align: center;
		background-color: white;
		background-image: url("../Assets/images/first.jpeg");
		background-repeat: no-repeat;
		background-size: 100% 100vh;
		flex: 0 0 66.666667%;
    	max-width: 66.666667%;
	}
	.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
	    position: relative;
	    width: 100%;
	    padding-right: 15px;
	    padding-left: 15px;
	}
	*, ::after, ::before {
    box-sizing: border-box;
	}
	div {
    display: block;
	}
	body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
	}
}


@media screen and (max-width: 450px) {
  h3{
		text-align: center;
		font-size: 19px;
		margin-left: 5px;
   }

}

@media screen and (max-width: 320px) {
  	h3{
		text-align: center;
		font-size: 19px;
		width: 306px;
   	}
  	col-4 {
    text-align: center;
    vertical-align: middle;
	}
	.col-4 {
	    max-width: 100%;
	}
	div {
	    display: block;
	}
	.cl{
		text-align: center;
		background-color: white;
		background-image: url("../Assets/images/first.jpeg");
		background-repeat: no-repeat;
		background-size: 100% 100vh;
    	max-width: 66.666667%;
	}
}


// Home page css

.col-4{
	text-align: center;
	vertical-align: middle;
}

.col-8{
	text-align: center;
	background-color: white;
	background-repeat: no-repeat;
	background-size: 100% 100vh;
}
.row{
	height: 90vh;
	margin-top: 2px;
}

.vet {
	display: table-cell;
	vertical-align: middle;
}

.vet2{
	display:table;
	height:89.3vh;
	overflow-x: hidden;
	overflow-y: hidden;
}
.image{
	width:100%;
	height:100%;
}
@media screen and (max-width: 450px) {
  h3{
  	text-align: center;
  }
  .col-4{
  	flex: 0 0 100%;
    max-width: 100%;
    max-height: 400px;
  	text-align: center;
  }
  .col-8{
		text-align: center;
		flex: 0 0 100%;
	    max-width: 100%;
	    max-height: 400px;
    }
	.vet2{
		display:table;
		height:200px;
	}
	body{
		overflow: scroll;
	}
	.image{
		width:100%;
		height:90%;
	}

}

// resume.js

import React from 'react';
import file from '../Assets/resume/sample.pdf'

 
function Resume() {
    return (
      	<>
      	<div className="container">
      		<div id="Iframe-Cicis-Menu-To-Go" className="set-margin-cicis-menu-to-go set-padding-cicis-menu-to-go set-border-cicis-menu-to-go set-box-shadow-cicis-menu-to-go center-block-horiz">
	        	<div className="responsive-wrapper responsive-wrapper-padding-bottom-90pct" style={{overflow: 'hidden'}}>
	      			<iframe style={{backgroundColor:"#877",border:'1px solid #CCC',borderWidth:'1px',marginBottom:'5px',maxWidth: '100%',height:"90vh",overflow: 'hidden'}} allowFullScreen title="frame" src={file} type="application/pdf" width="100%"></iframe>
		  		</div>
	  		</div>
	  	</div>
      	</>
    )
}

export default Resume;


// Form 

<div className="container">
			<section className="section">
			<article className="article">
			<form className="from" onSubmit={this.handleSubmit}>
				<label>Name</label>
				<input type="text" onChange = {this.handleChange} className="input-field" name="name" placeholder="Username" title="Name" value={this.state.form_value.name} /><br/>
				<label>Email</label>
				<input type="text" onChange = {this.handleChange} className="input-field" name="email" placeholder="Email" title="Email" value={this.state.form_value.email} /><br/><br/>
				<input type="submit" className="input-field2" name="submit" value="submit" title="Submit" />
			</form>
			</article>
			</section>
		</div>







// Leetcode 

// Palindrome Linked List

var isPalindrome = function(head) {
   if(!head) return null;
   if(head.next == null) return true;
    var str = new Array();
    var dub = new Array();
    while(head.next != null){
      str.push(head.val);
      if(head.next == null) {
        str = str+head.next.val;
      }
      head = head.next;
    }
    str.push(head.val);
    dub = str;
    str = JSON.stringify(str);
    dub = JSON.stringify(dub.reverse());
    if(str==dub){
      return true;
    } else {
      return false;
    }
};

// Optimized Palindrome Linked List

var isPalindrome = function(head) {
   if(!head) return null;
   if(head.next == null) return true;
    var str = new Array();
    var dub = new Array();
    while(head){
      str.push(head.val);
      head = head.next;
    }
    dub = str;
    str = JSON.stringify(str);
    dub = JSON.stringify(dub.reverse());
    return str==dub ? true : false ;
};
