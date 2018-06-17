import { html } from '../utils.mjs';

export default function DownloadPage() {
  return html`
    <div class="content download">
      <h1>Download options</h1>
      <p>
        Warsow is completely free to download and play, available for Windows, Linux and Mac OS X.
      </p>
      <p>
        <b>Important:</b> As of 2017-12-21, we've updated the release to
        include all recent pure pk3s which are required to play the game. If game
        has a broken UI or getting errors about missing pk3, you should download
        the new release.
      </p>

      <p>
        <a class="button button-flex button-slanted button-color-pink button-icon"
          href="http://sebastian.network/warsow/warsow-2.1.2-setup.exe">
          Warsow 2.1.2
          <i class="icon icon-big mdi mdi-windows"></i>
          <span class="button-small-text">
            Windows installer (.exe)
          </span>
        </a>
        <a class="button button-flex button-slanted button-color-pink button-icon"
          href="http://sebastian.network/warsow/warsow-2.1.2.tar.gz">
          Warsow 2.1.2
          <i class="icon icon-big mdi mdi-linux"></i>
          <span class="button-small-text">
            Unified (Windows + Linux, tar.gz)
          </span>
        </a>
        <a class="button button-flex button-slanted button-color-pink button-icon"
          href="http://sebastian.network/warsow/warsow-2.1.2.dmg">
          Warsow 2.1.2
          <i class="icon icon-big mdi mdi-apple"></i>
          <span class="button-small-text">
            macOS (.dmg)
          </span>
        </a>
      </p>

      <div class="divider"></div>

      <p>
        Other downloads:
      </p>

      <p>
        <a class="button button-flex button-slanted button-icon"
          href="http://sebastian.network/warsow/warsow_21_sdk.tar.gz">
          Warsow 2.1 SDK
          <i class="icon icon-big mdi mdi-download"></i>
          <span class="button-small-text">
            Source code and tools
          </span>
        </a>
        <a class="button button-flex button-slanted button-icon"
          href="http://sebastian.network/warsow/data1_21pure.pk3">
          data1_21pure.pk3
          <i class="icon icon-big mdi mdi-file"></i>
          <span class="button-small-text">
            This pk3 fixes bugs with bomb gametype
          </span>
        </a>
        <a class="button button-flex button-slanted button-icon"
          href="http://sebastian.network/warsow/UIfix/data2_21pure.pk3">
          data2_21pure.pk3
          <i class="icon icon-big mdi mdi-file"></i>
          <span class="button-small-text">
            This pk3 fixes broken UI
          </span>
        </a>
      </p>
    </div>
  `;
}