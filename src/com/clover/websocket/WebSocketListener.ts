import {WebSocketState} from './WebSocketState';
import { CloverWebSocketInterface } from './CloverWebSocketInterface';


/**
 * Listener interface to receive WebSocket events.
 *
 * <p>
 * An implementation of this interface should be added by {@link
    * WebSocket#addListener(WebSocketListener)} to a {@link WebSocket}
 * instance before calling {@link WebSocket#connect()}.
 * </p>
 *
 * <p>
 * {@link WebSocketAdapter} is an empty implementation of this interface.
 * </p>
 *
 * @see WebSocket#addListener(WebSocketListener)
 * @see WebSocketAdapter
 */
export interface WebSocketListener {
    onTextMessage(websocket: CloverWebSocketInterface, text: string): void;

    onConnected(websocket: CloverWebSocketInterface): void;

    onConnectError(websocket: CloverWebSocketInterface): void;

    onDisconnected(websocket: CloverWebSocketInterface): void;

    onCloseFrame(websocket: CloverWebSocketInterface, closeCode: number, reason: string): void;

    onError(websocket: CloverWebSocketInterface): void;

    onPingFrame(websocket: CloverWebSocketInterface): void;

    onSendError(websocket: CloverWebSocketInterface): void;

    onUnexpectedError(websocket: CloverWebSocketInterface): void;
}
