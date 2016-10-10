// Post.js
import React from 'react';
import md5 from 'md5';
import { Link } from 'react-router';
// import Collection from '../components/Collection';
// import CreateCollectionForm from '../components/CreateCollectionForm';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    
    return (
      <div>
        <br />
        <h3>Posts</h3>
        <br />
        <form id="post-data">
          <p>New Post</p>

          <div className="row">
            <div className="col-md-9">
              <div>
                <span> Post Type</span>
                <select name="post_status" id="post_type">
                  <option selected="selected" value="post">Post</option>
                  <option value="project">Project</option>
                </select>
              </div>
              <div className="form-group">
                <label for="post-title" className="col-sm-2 control-label">Post title Here</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="post-title" placeholder="title dawg" />
                </div>
              </div>

              <textarea className="form-control" id="post-body" rows="10"></textarea>
            </div>
            <div className="col-md-3">
              <div id="submitdiv" className="postbox">
                <div className="handlediv" title="Click to toggle"><br /></div><h3 className="hndle ui-sortable-handle"><span>Publish</span></h3>
                <div className="inside">
                  <div className="submitbox" id="submitpost">
                    <div id="minor-publishing">
                      <div id="minor-publishing-actions">
                        <div id="save-action">
                          <input type="submit" name="save" id="save-post" value="Save Draft" className="button" />
                          <span className="spinner"></span>
                        </div>
                        <div id="preview-action">
                          <a className="preview button" href="#" target="wp-preview-120" id="post-preview">Preview</a>
                          <input type="hidden" name="wp-preview" id="wp-preview" value="" />
                        </div>
                        <div className="clear"></div>
                      </div>

                      <div id="misc-publishing-actions">

                      <div className="misc-pub-section misc-pub-post-status">
                        <label for="post_status">Status:</label>
                        <span id="post-status-display"> Draft</span>
                        <a href="#post_status" className="edit-post-status hide-if-no-js"><span aria-hidden="true">Edit</span> <span class="screen-reader-text">Edit status</span></a>

                        <div id="post-status-select" className="hide-if-js">
                          <input type="hidden" name="hidden_post_status" id="hidden_post_status" value="draft" />
                          <select name="post_status" id="post_status">
                            <option value="pending">Pending Review</option>
                            <option selected="selected" value="draft">Draft</option>
                          </select>
                          <a href="#post_status" className="save-post-status hide-if-no-js button">OK</a>
                          <a href="#post_status" className="cancel-post-status hide-if-no-js button-cancel">Cancel</a>
                        </div>

                      </div>

                
                      <div className="misc-pub-section curtime misc-pub-curtime">
                        <span id="timestamp">
                        Publish <b>immediately</b></span>
                        <a href="#edit_timestamp" className="edit-timestamp hide-if-no-js"><span aria-hidden="true">Edit</span> <span class="screen-reader-text">Edit date and time</span></a>
                        <fieldset id="timestampdiv" className="hide-if-js">
                          <legend className="screen-reader-text">Date and time</legend>
                          <div className="timestamp-wrap">
                            <label><span className="screen-reader-text">Month</span>
                              <select id="mm" name="mm">
                                <option value="01" data-text="Jan">01-Jan</option>
                                <option value="02" data-text="Feb">02-Feb</option>
                                <option value="03" data-text="Mar">03-Mar</option>
                                <option value="04" data-text="Apr">04-Apr</option>
                                <option value="05" data-text="May">05-May</option>
                                <option value="06" data-text="Jun">06-Jun</option>
                                <option value="07" data-text="Jul">07-Jul</option>
                                <option value="08" data-text="Aug">08-Aug</option>
                                <option value="09" data-text="Sep">09-Sep</option>
                                <option value="10" data-text="Oct" selected="selected">10-Oct</option>
                                <option value="11" data-text="Nov">11-Nov</option>
                                <option value="12" data-text="Dec">12-Dec</option>
                              </select>
                            </label> 
                            <label><span className="screen-reader-text">Day</span>
                              <input type="text" id="jj" name="jj" value="04" size="2" maxlength="2" autoComplete="off" />
                            </label>, 
                            <label><span className="screen-reader-text">Year</span>
                              <input type="text" id="aa" name="aa" value="2016" size="4" maxlength="4" autoComplete="off" />
                            </label> @ 
                            <label><span className="screen-reader-text">Hour</span>
                              <input type="text" id="hh" name="hh" value="18" size="2" maxlength="2" autoComplete="off" />
                            </label>:
                            <label><span className="screen-reader-text">Minute</span>
                              <input type="text" id="mn" name="mn" value="21" size="2" maxlength="2" autoComplete="off" />
                            </label>
                          </div>
                          <p>
                            <a href="#edit_timestamp" className="save-timestamp hide-if-no-js button">OK</a>
                            <a href="#edit_timestamp" className="cancel-timestamp hide-if-no-js button-cancel">Cancel</a>
                          </p>
                        </fieldset>
                      </div>
                    </div>
                    <div className="clear"></div>
                  </div>

                  <div id="major-publishing-actions">
                    <div id="delete-action">
                      <a className="submitdelete deletion" href="#">Move to Trash</a>
                    </div>

                    <div id="publishing-action">
                      <span className="spinner"></span>
                      <input name="original_publish" type="hidden" id="original_publish" value="Publish" />
                      <input type="submit" name="publish" id="publish" className="button button-primary button-large" value="Publish" /></div>
                      <div className="clear"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
