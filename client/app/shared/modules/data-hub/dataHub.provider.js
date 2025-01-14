
import DataHub from './dataHub.service';

export default function DataHubProvider() {
    const provider = this;

    provider.state = null;

    this.setState = setState;
    this.$get = $get;


    function setState(state) {
        provider.state = state;
    }

    function $get() {
        if (provider.state) {
            return new DataHub(provider.state)
        } else {
            return new DataHub()
        }
    }

}