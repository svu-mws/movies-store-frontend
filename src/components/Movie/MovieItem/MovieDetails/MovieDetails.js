import React from 'react'
import {capitalize} from 'utils/StringUtils';
import Rating from 'components/Rating';

export default function MovieDetails({id, title, releasedDate, rating}) {
    return (
        <div className="mid-1 agileits_w3layouts_mid_1_home">
            <div className="w3l-movie-text">
                <h6>
                    <a href="single.html" data-test="title">
                        {capitalize(title)}
                    </a>
                </h6>
            </div>
            <div className="mid-2 agile_mid_2_home">
                <p data-test="releasedDate">{releasedDate}</p>
                <Rating rating={rating}/>
                <div className="clearfix">
                </div>
            </div>
        </div>
    );
}