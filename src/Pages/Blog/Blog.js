import React from 'react';

const Blog = () => {
    return (
        <div className='mt-14 mb-20 ml-14 mr-14'>
            
            <div tabindex="0" class="collapse collapse-arrow border border-purple-500 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium text-purple-400">
  What is cors?
  </div>
  <div class="collapse-content"> 
    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. </p>
  </div>
</div>
        </div>
    );
};

export default Blog;