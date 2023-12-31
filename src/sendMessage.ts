/* eslint-disable*/
import axios from 'axios'

/**
 * Send a Telegram message on pull request event.
 * @param chatId id of targeted chat gorup or channel.
 * @param message the message to be sent.
 * @param uri telegram api to send request to.
 */
const sendMessage = (
  chatId: string,
  message: string,
  uri: string,
  parse_mode_toggle: boolean = true
) => {
  if (parse_mode_toggle == true) {
    return axios.post(uri, {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdownv2'
    })
  } else {
    return axios.post(uri, {
      chat_id: chatId,
      text: message
    })
  }
}

export default sendMessage
