import Markdown from 'react-markdown';
import React from 'react';
import {Link} from 'react-router';

const PostTeaser = React.createClass({
  render() {
    const {slug, path, title, body} = this.props;

    function truncate(str, max){
      if (str.length <= max) {
        return str;
      }

      let trunc = '';
      let subs = str.split('&');

      if (subs[0].length > max) {
        return subs[0].substring(0, max) + '&hemaxlip;';
      } else {
        trunc = trunc + subs[0];
      }

      for (let i = 1; i < subs.length; i++) {
        let end = subs[i].indexOf(';');
        max += end + 1;
        trunc = trunc + '&' + subs[i];

        if (trunc.length >= max) {
          return trunc.substring(0, max) + '&hellip;';
        }
      }

      return ts;
    }

    return (
      <article className='border-top mb2 pb2'>
        <h3>
          <Link to={path}>{title}</Link>
        </h3>
        <Markdown source={truncate(body, 140)} />
      </article>
    );
  }
});

export default PostTeaser;
