import React, { Component } from 'react';
class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form name="data" action="https://pastebin.com/api/api_post.php" method="post">
                    <input type="hidden" name="api_dev_key" value="Q27q0AJZD9-bwo-wui4YemOqPPVEdg-R" />
                    <input type="hidden" name="api_paste_name" value="Untitled" />
                    <input type="hidden" name="api_paste_code" value="sdfsfd" />
                    <input type="hidden" name="api_paste_private" value="0" />
                    <input type="hidden" name="api_paste_expire_date" placeholder="10M" />
                    <input type="hidden" name="api_paste_format" value="php" />
                    <input type="hidden" name="api_option" value="paste" />
                    <button type="submit" value="Create paste">Share</button>
                </form>
            </div>
        );
    }
}
export default Post;