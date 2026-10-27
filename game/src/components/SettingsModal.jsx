import { useEffect, useState } from 'react';
import ModalShell from './ModalShell.jsx';
import { HAS_AUDIO, HAS_EFFECTS, HAS_MUSIC } from '../config/assets.js';

const SPEED_CHOICES = [
  { id: 'lenta', label: 'Lenta' },
  { id: 'normal', label: 'Normal' },
  { id: 'rapida', label: 'Rápida' },
  { id: 'instantanea', label: 'Instantânea' },
];

const SCALE_CHOICES = [
  { id: 'padrao', label: 'Padrão (100%)' },
  { id: 'grande', label: 'Grande (115%)' },
  { id: 'projetor', label: 'Projetor / Sala (135%)' },
];

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

  const currentSpeed = preferences.textSpeed ?? 'normal';
  const currentScale = preferences.textScale ?? 'padrao';
  const reducedMotionActive = preferences.reducedMotion ?? systemReducedMotion;

  return (
    <ModalShell title="Configurações" label="configurações" onClose={onClose} wide>
      <p className="modal-lead">
        Ajuste a leitura, o tamanho da interface para sala de aula ou projetor e o conforto visual.
      </p>
      <div className="settings-list">
        <div className="setting-row setting-row--stacked">
          <div>
            <span className="setting-row__label" id="text-scale-label">
              Tamanho do texto e modo de exibição
            </span>
            <small>
              Use o modo <strong>Projetor / Sala</strong> para leitura coletiva à distância com alto contraste.
            </small>
          </div>
          <div className="segmented-control" role="group" aria-labelledby="text-scale-label">
            {SCALE_CHOICES.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={'segmented-control__btn' + (currentScale === opt.id ? ' segmented-control__btn--active' : '')}
                aria-pressed={currentScale === opt.id}
                onClick={() => onChange({ ...preferences, textScale: opt.id })}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="setting-row setting-row--stacked">
          <div>
            <span className="setting-row__label" id="text-speed-label">
              Velocidade dos textos
            </span>
            <small>Ritmo de revelação das falas na caixa de diálogo.</small>
          </div>
          <div className="segmented-control" role="group" aria-labelledby="text-speed-label">
            {SPEED_CHOICES.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={'segmented-control__btn' + (currentSpeed === opt.id ? ' segmented-control__btn--active' : '')}
                aria-pressed={currentSpeed === opt.id}
                onClick={() => onChange({ ...preferences, textSpeed: opt.id })}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="setting-row">
          <div>
            <span className="setting-row__label" id="reduced-motion-label">
              Reduzir animações
            </span>
            <small>
              {systemReducedMotion
                ? 'Seu sistema já prefere menos movimento.'
                : 'Desativa transições e exibe os diálogos instantaneamente.'}
            </small>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={reducedMotionActive}
            aria-labelledby="reduced-motion-label"
            className={'vn-toggle' + (reducedMotionActive ? ' vn-toggle--on' : '')}
            onClick={() => onChange({ ...preferences, reducedMotion: !reducedMotionActive })}
          >
            <span className="vn-toggle__track">
              <span className="vn-toggle__thumb" />
            </span>
            <span className="vn-toggle__status">{reducedMotionActive ? 'ATIVADO' : 'DESATIVADO'}</span>
          </button>
        </div>

        <div className="setting-row">
          <div>
            <span className="setting-row__label">Tela cheia</span>
            <small>Ocupa toda a área do monitor ou projetor sem barras do navegador.</small>
          </div>
          <button
            className="setting-action"
            type="button"
            onClick={toggleFullscreen}
            disabled={!fullscreenSupported}
          >
            {fullscreen ? 'SAIR DA TELA CHEIA' : 'ATIVAR TELA CHEIA'}
          </button>
        </div>

        <div className={`setting-row ${!HAS_AUDIO ? 'setting-row--disabled' : ''}`}>
          <div>
            <label htmlFor="master-volume">
              Volume geral <span className="setting-row__value">{preferences.masterVolume}%</span>
            </label>
            <small>{HAS_AUDIO ? 'Volume de todos os sons.' : 'Disponível quando houver áudio.'}</small>
          </div>
          <input
            id="master-volume"
            type="range"
            min="0"
            max="100"
            value={preferences.masterVolume}
            disabled={!HAS_AUDIO}
            onChange={(event) => onChange({ ...preferences, masterVolume: Number(event.target.value) })}
          />
        </div>

        <div className={`setting-row ${!HAS_MUSIC ? 'setting-row--disabled' : ''}`}>
          <div>
            <label htmlFor="music-volume">
              Volume da música <span className="setting-row__value">{preferences.musicVolume}%</span>
            </label>
            <small>{HAS_MUSIC ? 'Música e ambiente.' : 'Disponível quando houver trilha sonora.'}</small>
          </div>
          <input
            id="music-volume"
            type="range"
            min="0"
            max="100"
            value={preferences.musicVolume}
            disabled={!HAS_MUSIC}
            onChange={(event) => onChange({ ...preferences, musicVolume: Number(event.target.value) })}
          />
        </div>

        <div className={`setting-row ${!HAS_EFFECTS ? 'setting-row--disabled' : ''}`}>
          <div>
            <label htmlFor="effects-volume">
              Efeitos sonoros <span className="setting-row__value">{preferences.effectsVolume}%</span>
            </label>
            <small>{HAS_EFFECTS ? 'Sons de interação.' : 'Disponível quando houver áudio no jogo.'}</small>
          </div>
          <input
            id="effects-volume"
            type="range"
            min="0"
            max="100"
            value={preferences.effectsVolume}
            disabled={!HAS_EFFECTS}
            onChange={(event) => onChange({ ...preferences, effectsVolume: Number(event.target.value) })}
          />
        </div>

        {!HAS_AUDIO && (
          <p className="settings-note" id="audio-note">
            O áudio ainda não foi integrado. Os controles de volume serão ativados nessa etapa.
          </p>
        )}
        {fullscreenError && (
          <p className="settings-error" role="alert">
            {fullscreenError}
          </p>
        )}
        {!fullscreenSupported && (
          <p className="settings-note">Este navegador não oferece suporte ao modo tela cheia.</p>
        )}
      </div>
    </ModalShell>
  );
}
