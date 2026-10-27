import { useEffect, useState } from 'react';
import ModalShell from './ModalShell.jsx';
import { HAS_AUDIO, HAS_EFFECTS, HAS_MUSIC } from '../config/assets.js';

export default function SettingsModal({ preferences, onChange, onClose, systemReducedMotion }) {
  const [fullscreen, setFullscreen] = useState(Boolean(document.fullscreenElement));
  const [fullscreenError, setFullscreenError] = useState('');
  const fullscreenSupported = Boolean(document.documentElement.requestFullscreen && document.exitFullscreen);

  useEffect(() => {
    const sync = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', sync);
    return () => document.removeEventListener('fullscreenchange', sync);
  }, []);

  async function toggleFullscreen() {
    try {
      setFullscreenError('');
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      setFullscreenError('O navegador não permitiu ativar a tela cheia.');
    }
  }

  return (
    <ModalShell title="Configurações" label="configurações" onClose={onClose}>
      <p className="modal-lead">Ajuste a experiência para jogar do seu jeito.</p>
      <div className="settings-list">
        <div className={`setting-row ${!HAS_AUDIO ? 'setting-row--disabled' : ''}`}>
          <div><label htmlFor="master-volume">Volume geral <span className="setting-row__value">{preferences.masterVolume}%</span></label><small>{HAS_AUDIO ? 'Volume de todos os sons.' : 'Disponível quando houver áudio.'}</small></div>
          <input id="master-volume" type="range" min="0" max="100" value={preferences.masterVolume} disabled={!HAS_AUDIO} onChange={(event) => onChange({ ...preferences, masterVolume: Number(event.target.value) })} />
        </div>
        <div className={`setting-row ${!HAS_MUSIC ? 'setting-row--disabled' : ''}`}>
          <div><label htmlFor="music-volume">Volume da música <span className="setting-row__value">{preferences.musicVolume}%</span></label><small>{HAS_MUSIC ? 'Música e ambiente.' : 'Disponível quando houver trilha sonora.'}</small></div>
          <input id="music-volume" type="range" min="0" max="100" value={preferences.musicVolume} disabled={!HAS_MUSIC} onChange={(event) => onChange({ ...preferences, musicVolume: Number(event.target.value) })} />
        </div>
        <div className={`setting-row ${!HAS_EFFECTS ? 'setting-row--disabled' : ''}`}>
          <div><label htmlFor="effects-volume">Efeitos sonoros <span className="setting-row__value">{preferences.effectsVolume}%</span></label><small>{HAS_EFFECTS ? 'Sons de interação.' : 'Disponível quando houver áudio no jogo.'}</small></div>
          <input id="effects-volume" type="range" min="0" max="100" value={preferences.effectsVolume} disabled={!HAS_EFFECTS} onChange={(event) => onChange({ ...preferences, effectsVolume: Number(event.target.value) })} />
        </div>
        {!HAS_AUDIO && <p className="settings-note" id="audio-note">O áudio ainda não foi integrado. Os controles de volume serão ativados nessa etapa.</p>}
        <div className="setting-row">
          <div><label htmlFor="text-speed">Velocidade dos textos</label><small>Será aplicada aos futuros diálogos.</small></div>
          <select id="text-speed" value={preferences.textSpeed} onChange={(event) => onChange({ ...preferences, textSpeed: event.target.value })}>
            <option value="lenta">Lenta</option><option value="normal">Normal</option><option value="rapida">Rápida</option>
          </select>
        </div>
        <div className="setting-row">
          <div><label htmlFor="reduced-motion">Reduzir animações</label><small>{systemReducedMotion ? 'Seu sistema já prefere menos movimento.' : 'Deixa a interface mais estática.'}</small></div>
          <input id="reduced-motion" type="checkbox" checked={preferences.reducedMotion ?? systemReducedMotion} onChange={(event) => onChange({ ...preferences, reducedMotion: event.target.checked })} />
        </div>
        <div className="setting-row">
          <div><span className="setting-row__label">Tela cheia</span><small>Use toda a área do monitor.</small></div>
          <button className="setting-action" type="button" onClick={toggleFullscreen} disabled={!fullscreenSupported}>{fullscreen ? 'SAIR DA TELA CHEIA' : 'ATIVAR TELA CHEIA'}</button>
        </div>
        {fullscreenError && <p className="settings-error" role="alert">{fullscreenError}</p>}
        {!fullscreenSupported && <p className="settings-note">Este navegador não oferece tela cheia.</p>}
      </div>
    </ModalShell>
  );
}
