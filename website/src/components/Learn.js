import React from 'react';
import {UnorderedList, ListItem, Heading} from 'evergreen-ui';

function Learn(){
    return(
            <div>
                <Heading>
                    Learn more about what you can do:
                </Heading>
                <UnorderedList
                    marginLeft="50px"
                >
                    <ListItem>
                        Increase awareness by letting your fellow community members know
                    </ListItem>
                    <ListItem>
                        Research your local communities issue more in depth so that you can take precautions against the possible environmental side effects
                    </ListItem>
                    <ListItem>
                        Contact your local government representatives
                    </ListItem>
                </UnorderedList>
            </div>
    )

}

export default Learn;