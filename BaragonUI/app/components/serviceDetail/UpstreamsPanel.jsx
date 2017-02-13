import React, { PropTypes } from 'react';

import { asGroups } from './util';

import RemoveUpstreamButton from '../common/modalButtons/RemoveUpstreamButton';

const renderUpstream = (editable, loadBalancerService, afterRemoveUpstream) => (upstream) => {
  const {upstream: upstreamName, rackId, group} = upstream;
  const editButton = (
    <a className="pull-left">
      <RemoveUpstreamButton
        upstream={upstream}
        loadBalancerService={loadBalancerService}
        afterRemoveUpstream={afterRemoveUpstream}
      />
    </a>
  );

  return (
    <h4 key={upstreamName}>
      {editable ? editButton : null}
      {upstreamName} {rackId ? `(${rackId})` : ''} {group ? `(${group})` : ''}
    </h4>
  );
};


const UpstreamsPanel = ({upstreams, loadBalancerService, afterRemoveUpstream, editable}) => {
  return (
    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Upstreams</h4>
        </div>
        <div className="panel-body">
          {
            asGroups(
              upstreams,
              2,
              renderUpstream(editable, loadBalancerService, afterRemoveUpstream)
            )
           }
        </div>
      </div>
    </div>
  );
};

UpstreamsPanel.propTypes = {
  upstreams: PropTypes.array,
  loadBalancerService: PropTypes.object,
  afterRemoveUpstream: PropTypes.func,
  editable: PropTypes.bool,
};

export default UpstreamsPanel;
