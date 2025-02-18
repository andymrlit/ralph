import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let Terminos = `
*_Toda la informaci��n que se mencione aqu�� no excluye a la Propietario del Bot, y Propietarios Acredores al uso de The LoliBot-MD_*
*_No Somos responsables del desconocimiento que tenga por parte de esta informaci��n._* 
*T?RMINOS DE PRIVACIDAD*
_- Somos consciente del constante uso que le pueda dar al Bot, y tambi��n Garantizamos que la informaci��n como (im��genes, v��deos, enlaces, ubicaci��n, Audios, Stickers, Gif, Contactos que Usted Proporcione en torno a N��mero(s) Oficial(es) No son ni ser��n Compartido Con Nadie, ni se usaran dicho Datos fuera del entorno del BOT._
_- Lo que realic�� con el BOT queda solo en Usted ya que en N��mero(s) Oficial(es) El Chat se Borra cada 24 Horas, seg��n el tiempo de Mensajes Temporales de WhatsApp._
_- Es posible que en N��mero(s) Oficial(es) el Bot no est�� Activado las 24 Horas de los 7 d��as de la Semana, eso no implica que no lo est�� o que Propietarios NO OFICIALES puedan Hacerlo._
_- El chat an��nimo del comando #start, valga la redundancia no mostrar�� ning��n dato de los Usuarios por parte de The LoliBot. Eso no implica que las personas que hagan uso de esta funci��n puedan dar a conocer sus datos. en N��mero(s) Oficial(es)._
_- NO somos responsable si Hay alteraciones de este Bot no siendo N��mero(s) Oficial(es) y tengan de uso un Repositorio de GitHub que no corresponda al Oficial, o que implementen Usuarios de Terceros integraciones que comprometan a los(as) Usuarios(as) al utilizar Versiones no Oficiales._
*T?RMINOS DE USO* 
_- La informaci��n que haya en este Bot y el/la usuario/a Haga uso de las Mismas asumir�� saber los T��rminos y Condiciones de tal forma que no habr�� incovenientes al hacer un uso Particular de las Funciones del Bot._
_- El Bot contiene Material que solo puede ser visible para mayores de 18 A?os, NO somos responsable si no cumple con la edad m��nima para usar el Material para Adultos._
_- Las im��genes, V��deos y Audios que tenga este Bot son de uso P��blico, Pero se considerar�� Falta de Respeto al realizar Ediciones en el Material ya exitente que porte Nombre del Bot o informaci��n relevante._
_- Al hacer uso de una solicitud para ingreso de grupo con Una Cuenta Oficial, es recomendable que el grupo no cuente con temas de Odio, virus, contenido indebido, temas de discriminaci��n u campa?as sin fundamentos._
_- Si ha recibido un Comunicado Oficial siendo N��mero(s) Oficial(es) Mantener el Respeto de la misma manera si recibe un Mensaje sin haber usado un Comando Mantener el Respeto ya que puede en este ultimo caso ser una Persona Real._
*CONDICIONES DE USO*
_- NO haga ni intente Llamar o hacer Videollamada al Bot siendo N��mero(s) Oficial(es) ya que obstaculiza el funcionamiento del BOT._
_- NO usar el Bot siendo N��mero(s) Oficial(es) para llevar a cabo alguna acci��n hostil que pueda verse comprometida el Funcionamiento del BOT._
_- NO use el comando de SPAM repetidamente, ya que Provocar�� un Mal funcionamiento en el BOT, tampoco envie al BOT mensajes que puedan comprometer el Funcionamiento de la misma._
_- Al hacer uso de ciertos comandos que tengan como objetivo socavar la incomodidad, intranquilidad, molestia u otro termino tajante, se tomar��n las respectivas sanciones o llamados de alerta para prevalecer la integridad de los/las Usuarios(as) y funcionamiento de The LoliBot-MD._
*ESTE ES EL REPOSITORIO OFICIAL*
*https://github.com/andymrlit*
*GRUPOS OFICIAL DE ASISTENCIA*
*si necesitas ayuda o pregunta entra al grupo de bot ofc*
*https://chat.whatsapp.com/DSjOomRaTkU4z1a5ngl2Yw*
*CUENTA OFICIAL DE ASISTENCIA - FACEBOOK*
~ _puede unirte al grupo asistencia facebook del bot_
*https://instagram.com/andy_mr_lit*
*~ Muchas Gracias Por tomarte el tiempo en informate sobre The LoliBot-MD*
`.trim()
conn.sendHydrated(m.chat, Terminos,  `${wm}\nEstamos de acuerdo en Hacer Colaboraciones con Personas Comprometidas, manteniendo el Respeto Puedes Contactar si ese es el caso a esta Grupo Oficial asistencia facebook| https://instagram.com/andy_mr_lit`, pp, 'https://github.com/andymrlit', 'The AndyMd', null, null, [
['menu conpleto', '.allmenu'],
['listamenu', '/menulista'],
['menucompleto', '#menu']
], m,)
}

handler.customPrefix = /terminos|t��rminos|t��rminos, condiciones y privacidad|terminos, condiciones y privacidad|t��rminos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Termin�� se uso|t��rminos de uso|T��rminos de uso|T��rminos y condiciones/i
handler.command = new RegExp
//handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}


