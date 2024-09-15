import { extractCommit } from 'src/services/version/version.service'

const pleromaFeCommitUrl = 'https://iceshrimp.dev/iceshrimp/akkoma-fe/commit/'
const pleromaBeCommitUrl = 'https://iceshrimp.dev/iceshrimp/Iceshrimp.NET/commit/'

const VersionTab = {
  data () {
    const instance = this.$store.state.instance
    return {
      backendVersion: instance.backendVersion,
      frontendVersion: instance.frontendVersion
    }
  },
  computed: {
    frontendVersionLink () {
      return pleromaFeCommitUrl + this.frontendVersion
    },
    backendVersionLink () {
      return pleromaBeCommitUrl + extractCommit(this.backendVersion)
    }
  }
}

export default VersionTab
