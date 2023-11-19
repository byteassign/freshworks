import { CtiTriggerDialerPayload } from "./CtiTriggerDialerPayload";

/**
 */
export interface ApplicationEventMap{
    Global: {             
         /**Test */
        "cti.triggerDialer": CtiTriggerDialerPayload;
    },
    TicketDetailsPage: {
        "ticket.replyClick": void,
        "ticket.sendReply": void,
        "ticket.forwardClick": void
    }    
}