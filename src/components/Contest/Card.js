import React from 'react'
import './card.css'

const Card = (props) => {
    let {name, start_time, end_time, url, site} = props;

    return (
        <div>
            <div className='contest-card'>
                <img className='logo' src={getImage(site)} alt={site} />
                <div className="info">
                    <a rel="noreferrer"  href={url} target="_blank" className='name'>{name}</a>
                    <div className='date-tym'>
                        <div className='date'> <span style={{ fontWeight : 'bold', color : 'aliceblue'}}>Start: </span>  {getDate(start_time, site === 'CodeChef')}</div>
                        <div className="tym"> <span style={{ fontWeight : 'bold' , color : 'aliceblue'}}>End:</span> {getDate(end_time, site === 'CodeChef')}</div>
                    </div>
                    
                </div>
            </div>
            <div className='sep'></div>
        </div>
    )
}
function getDate(d, isCodeChef = false) {

	if (isCodeChef) {
		d = d.replace(" UTC", ".000Z");
	}
	var date_temp = new Date(d);
	var date = date_temp.toLocaleString("en-US");
	var datearray = date.split("/");
	var newdate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];
	return newdate.replace(",", "    ");
}

function getImage(site) {
	var uri = "";
	switch (site) {
		case "CodeChef":
			uri =
				"https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg";
			break;
		case "CodeForces":
			uri =
				"https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg";
			break;
		case "LeetCode":
			uri =
				"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
			break;
		case "AtCoder":
			uri = "https://avatars.githubusercontent.com/u/7151918?s=200&v=4";
			break;
		case "HackerRank":
			uri =
				"https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png";
			break;
		case "HackerEarth":
			uri =
				"https://yt3.ggpht.com/ytc/AAUvwngkLcuAWLtda6tQBsFi3tU9rnSSwsrK1Si7eYtx0A=s176-c-k-c0x00ffffff-no-rj";
			break;
		case "Kick Start":
			uri =
				"https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip";
			break;
		case "TopCoder":
			uri =
				"https://images.ctfassets.net/b5f1djy59z3a/3MB1wM9Xuwca88AswIUwsK/dad472153bcb5f75ea1f3a193f25eee2/Topcoder_Logo_200px.png";
			break;
		default:
		// Do nothing
	}
	return uri;
}
export default Card
